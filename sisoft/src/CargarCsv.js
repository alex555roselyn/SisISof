import React from 'react';

import  {Button} from 'react-bootstrap';

import axios from 'axios';
import ds from './Imagenes.js';
import {Select } from 'antd';
import CsvParse from '@vtex/react-csv-parse'






var dataClientes=[];

var children = [];

const { Option } = Select;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


class FileReader extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      datagrid:[],
       modalNuevo:false,
      tables:[],
    searchText: '',
    searchedColumn: '',
    selectedRowKeys:[],
    prod:[],
    total:null,
    tab2:[],
    visiblebutton:true,
    cantidad:null,
    modalVenta:false,
    dataClient:[],
    modalFactura:false,
    env:null,
    n:'',
    c:'',
    t:null,
    cliet:'',
    desc: null,
      data:[],

    };
    this.llenarGridData=this.llenarGridData.bind(this);
    this.send=this.send.bind(this);
      this.onSelectChange=this.onSelectChange.bind(this);
          this.abrirModal=this.abrirModal.bind(this);
              this.cerrarModalCrear=this.cerrarModalCrear.bind(this);
              this.Okconfirm=this.Okconfirm.bind(this);
              this.getOrder=this.getOrder.bind(this);
              this.getventa=this.getventa.bind(this);
              this.sendVenta=this.sendVenta.bind(this);
              this.showVenta=this.showVenta.bind(this);
              this.cerrarModalVenta=this.cerrarModalVenta.bind(this);
              this.handleChange=this.handleChange.bind(this);
              this.getClients=this.getClients.bind(this);
              this.showFactura=this.showFactura.bind(this);
              this.cerrarshowFactura=this.cerrarshowFactura.bind(this);
              this.OkFactura=this.OkFactura.bind(this);

}
  



handleData = data => {
  this.setState({ data })
}









getClients()
{



  axios.get('http://34.68.215.244:9200/clientes/_doc/_search?scroll=10m&size=1000',{
      headers: {
        //'Authorization': 'Bearer ' + Cookies("token")
        //'Authorization' : 'Basic ZWxhc3RpYzpZcDlFaU9PVDZjOWY2V2lqMVlWNUlaMmI='
      }
    })
      .then(res => {
        this.setState({
           dataClient: res.data.hits.hits

        });

        //console.log(res.data.hits);

const {dataClient}=this.state;
console.log(dataClient);





children=[];

dataClientes=[];

for (var i = 0; i < dataClient.length; i++) {

//console.log(datagrid[i]._source.message);
//datagrid[i]._source.nombre_imagen,



var estado=dataClient[i]._source.estado;

var t=dataClient[i]._source.tipo;
var t1;
var descuento;

if(t===1)
{
t1="Cliente Frecuente";
descuento=0.10;
}

if(t===2)
{
t1="Cliente Credito";
descuento=0.08;
}

if(t===3)
{
t1="Cliente Contado";
descuento=0.15;
}

dataClientes.push({
  "key": dataClient[i]._id,
  "nombre":dataClient[i]._source.nombre,
  "apellido":dataClient[i]._source.apellido,
  "estado": estado,
  "telefono":dataClient[i]._source.telefono,
  "email": dataClient[i]._source.correo,
  "tipo": t1,
  "descuento": descuento
  
});


var sz=""+i;




if(estado===1)
{
  children.push(<Option key={sz}>{dataClient[i]._source.nombre} {dataClient[i]._source.apellido}</Option>);
}


if(estado===0)
{
  console.log("inactivo");
}



}
      })



}





handleChange(value) {
  console.log(`selected ${value}`);



var i=parseInt(value);

console.log(dataClientes[i]);


if(!(value===''|| value===undefined || value===[]))
{
document.getElementById('Input1').value=dataClientes[i].email;//correo

document.getElementById('Input2').value=dataClientes[i].nombre;//nombre

document.getElementById('Input3').value=dataClientes[i].apellido;//apellido

document.getElementById('Input4').value=dataClientes[i].telefono;//telefono

document.getElementById('Input5').value=dataClientes[i].tipo;//telefono

document.getElementById('Input6').value=dataClientes[i].descuento;//telefono

}
}


         getventa()
         {

         }


sendVenta()
{

  var envio=[];

var suma;
var ps;

const {data}=this.state;



suma=0;


for (var i = 0; i < data.length; i++) {


envio.push({
  "key":  data[i].key,
  "name": data[i].name,
  "precio": parseInt(data[i].precio)
})

ps=parseInt(data[i].precio);

suma=suma+ps;
console.log(suma);

}








var a=document.getElementById('Input1').value;

var b=document.getElementById('Input2').value;

var c=document.getElementById('Input3').value;

var d=document.getElementById('Input4').value;

var e=document.getElementById('Input5').value;

var f=document.getElementById('Input6').value;


var to=suma;
var porcent=to*f;
var neto=to-porcent;

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"correo": a,"nombre": b,"apellido": c,"telefono": d,"tipo": e,"descuento": f, "productos": envio, "subtotal": neto, "estado": 1});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/ordenes/_doc/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  this.setState({modalVenta: false});

document.getElementById('Input1').value="";//correo

document.getElementById('Input2').value="";//nombre

document.getElementById('Input3').value="";//apellido

document.getElementById('Input4').value="";//telefono

document.getElementById('Input5').value="";//tipo

document.getElementById('Input6').value=null;//descuento

this.showFactura(a,b,c,d,e,f,envio,neto);


}

showFactura(correo,nombre,apellido,telefono,tipo,descuento,productos,total)
{





var l=nombre+" "+apellido;

this.setState({ modalFactura: true, env: total, n: l, c: correo, t: telefono, cliet: tipo, desc: descuento});



}
cerrarshowFactura()
{
  this.setState({ modalFactura: false});
}
OkFactura()
{
  
}




showVenta()
{
  this.setState({modalVenta: true});
}                   




cerrarModalVenta()
{
  this.setState({modalVenta: false});

document.getElementById('Input1').value="";//correo

document.getElementById('Input2').value="";//nombre

document.getElementById('Input3').value="";//apellido

document.getElementById('Input4').value="";//telefono

document.getElementById('Input5').value="";//tipo

document.getElementById('Input6').value=null;//descuento


}




async   send()
{
    //console.log(ds);


    for (var i = 0; i < ds.length; i++) {
    



sleep(2000);




var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"id":ds[i].id,"name":ds[i].name,"precio":ds[i].precio,"nombre_imagen":ds[i].nombre_imagen,"existencia":ds[i].existencia,"estado":ds[i].estado});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/productos/_doc/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


}
}

llenarGridData()
{
  try{

  }
  catch(err)
  {
    console.error(err);
  }
}






async getOrder()
{




  try{

  }
  catch(err)
  {
    console.error(err);
  }
}
  




















 onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });



  };



abrirModal()
{
  this.setState({modalNuevo: true});
}

cerrarModalCrear()
{

this.getOrder();

  this.setState({modalNuevo: false});


}


Okconfirm()
{
  this.setState({modalNuevo: false});
/*
ars.sort(function(a, b) {
  return b - a;
});
var exc=ars[0];
console.log(exc);

var su=exc+1;
this.setState({tables:[]});


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"id": su,"name": this.state.value ,"precio": parseInt(this.state.precio),"nombre_imagen": "imagen"+su,"existencia": parseInt(this.state.values),"estado": 1 });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/productos/_doc/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));






  this.setState({modalNuevo: false, value:[], values:[], precio: null});

for (var f = 0; f < 2.; f++) {
this.llenarGridData();
}
  

*/

}




componentDidMount()
{

for (var i = 0; i < 2; i++) {
 this.getClients();
}


//  console.log(datas);
}





  render() {

  const keys = [
    "key",
    "name",
    "precio",

  ]

console.log(this.state.data);


    return (
      <div>
      <CsvParse
      keys={keys}
      onDataUploaded={this.handleData}
      onError={this.handleError}
      render={onChange => <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Cargar</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" onChange={onChange}/>
    <label class="custom-file-label" for="inputGroupFile01">Busqueda</label>
  </div>
</div>}
    />

<form>

<Select mode="tags" style={{ width: '100%' }} placeholder="Seleccione un Cliente" onChange={this.handleChange} tokenSeparators={[',']}>
    {children}
  </Select>

  <div className="form-group">
    <label>Correo Electrónico</label>
    <input type="email" className="form-control" id="Input1" placeholder="name@example.com"/>
      <label>Nombre</label>
     <input type="email" className="form-control" id="Input2" placeholder="" required/>
           <label>Apellido</label>
     <input type="email" className="form-control" id="Input3" placeholder="" required/>
  </div>

<div className="form-group">
    <label >Teléfono</label>
    <input type="number" className="form-control" id="Input4" placeholder="12345678"/>
      <label >Tipo de Cliente</label>
    <input type="text" className="form-control" id="Input5"/>
      <label >Descuento</label>
    <input type="number" className="form-control" id="Input6"/>
  </div>
</form>
<Button onClick={this.sendVenta}>Enviar</Button>
     </div>
    );
  }
}

export default FileReader;