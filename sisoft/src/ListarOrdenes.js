import React from 'react';
import TablaVentas from './TablaVentas.js';

import axios from 'axios';
import ds from './Imagenes.js';
import { Tag, Button, Modal, Table } from 'antd';



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




var data=[];

export default class ListarOrdenes extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      datagrid:[],
      tables:[],
      dataprod:[],
      dato:[],
      visible:false,
    };
    this.llenarGridData=this.llenarGridData.bind(this);
    this.send=this.send.bind(this);
    this.desactivar=this.desactivar.bind(this);
    this.view=this.view.bind(this);
    this.cerrarshow=this.cerrarshow.bind(this);
    this.vermodal=this.vermodal.bind(this);
  }






//Funcion que se ejecuta antes del renderizado de la pagina para llenar la tabla de datos
componentWillMount() {
  try{

var requestOptions = {
  method: 'DELETE',
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/_search/scroll/_all", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    
  }catch(err){
    console.error('#ERROR Error en willMount de la pagina de formularios: ' + err);
  }
}


cerrarshow()
{
  this.setState({visible: false})
}


vermodal()
{
    this.setState({visible: true})
}

async desactivar(id)
{
console.log("desactivar"+id);


  axios.get('http://34.68.215.244:9200/ordenes/_doc/'+id,{
      headers: {
        //'Authorization': 'Bearer ' + Cookies("token")
        //'Authorization' : 'Basic ZWxhc3RpYzpZcDlFaU9PVDZjOWY2V2lqMVlWNUlaMmI='
      }
    })
      .then(res => {
        this.setState({
           dato: res.data._source

        });

        console.log(this.state.dato);

        const {dato}=this.state;



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"nombre":dato.nombre,"apellido":dato.apellido,
  "telefono":dato.telefono,"correo": dato.correo,"estado": 0, "productos": dato.productos,
   "tipo": dato.tipo, "subtotal": dato.subtotal, "descuento": dato.descuento });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/ordenes/_doc/"+id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


});

      this.setState({tables: []});

this.llenarGridData();





}

async view(id)
{






  axios.get('http://34.68.215.244:9200/ordenes/_doc/'+id,{
      headers: {
        //'Authorization': 'Bearer ' + Cookies("token")
        //'Authorization' : 'Basic ZWxhc3RpYzpZcDlFaU9PVDZjOWY2V2lqMVlWNUlaMmI='
      }
    })
      .then(res => {
        this.setState({
           dataprod: res.data._source.productos

        });

        //console.log(res.data.hits);

const {dataprod}=this.state;
console.log(dataprod);

this.vermodal();

  });

}



async   send()
{
    //console.log(ds);


    for (var i = 0; i < ds.length; i++) {
    



await sleep(2000);







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








  axios.get('http://34.68.215.244:9200/ordenes/_doc/_search?scroll=10m&size=1000',{
      headers: {
        //'Authorization': 'Bearer ' + Cookies("token")
        //'Authorization' : 'Basic ZWxhc3RpYzpZcDlFaU9PVDZjOWY2V2lqMVlWNUlaMmI='
      }
    })
      .then(res => {
        this.setState({
           datagrid: res.data.hits.hits

        });

        //console.log(res.data.hits);

const {datagrid}=this.state;
console.log(datagrid);


data=[];



for (var i = 0; i < datagrid.length; i++) {

//console.log(datagrid[i]._source.message);
//datagrid[i]._source.nombre_imagen,



var ex=datagrid[i]._id;



var estado=datagrid[i]._source.estado;
var tg;

var detalle=(<Button className="rounded-pill text-info" data-toggle="tooltip" title="Ver Productos"  onClick={this.view.bind(this, ex)} >Ver</Button>);

if(estado===0)
{
  tg=(<Tag color="red">Inactivo</Tag>);


}
if(estado===1)
{
  tg=(<Button className="rounded-pill text-info" data-toggle="tooltip" title="Desactivar el pedido?"   onClick={this.desactivar.bind(this, ex)}   >Desactivar</Button>);
}










data.push({
  "key": datagrid[i]._id,
  "nombre":datagrid[i]._source.nombre,
  "apellido":datagrid[i]._source.apellido,
  "estado": tg,
  "telefono":datagrid[i]._source.telefono,
  "email": datagrid[i]._source.correo,
  "detalles": detalle,
  "total":  "Q."+datagrid[i]._source.subtotal,
  
});





}



this.setState({ tables: data });







      })

  }
  catch(err)
  {
    console.error(err);
  }
}






componentDidMount()
{





  for (var i = 0; i < 2; i++) {
  this.llenarGridData();
  }

//  console.log(datas);
}


render()


  

{

  const columns = [
       {
        title: 'Producto',
        dataIndex: 'name',
        key: 'name',
        width: '28%',
      },
       {
        title: 'Precio',
        dataIndex: 'precio',
        key: 'precio',
        width: '28%',
      },
      ]





  return(
    <>
    <Modal visible={this.state.visible} okText="Listo" width={400} cancelText="Cerrar" onCancel={this.cerrarshow} onOk={this.cerrarshow}>
<Table  columns={columns} dataSource={this.state.dataprod} />


    </Modal>
<TablaVentas datas={this.state.tables} />
</>
    );
}
}