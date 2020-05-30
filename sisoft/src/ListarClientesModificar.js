import React from 'react';
import TablaClientesModificar from './TablaClientesModificar.js';
import datas from './data.js';
import axios from 'axios';
import ds from './Imagenes.js';
import {
SettingOutlined
} from '@ant-design/icons';
import {Tag, Button ,Form, Select,Modal, Input } from 'antd';


const { Option, OptGroup } = Select;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



var data=[];
var seleccion;

export default class ListarClientesModificar extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    	datagrid:[],
    	tables:[],
    	tipocliente:undefined,
    	dato:[],
    	modalEditar:false,
    	type: undefined,
    	selectedName:[],
    	selectedApellido:[],
    	selectedCorreo:[],
    	selectedTelefono:[],
    	selectedEstado:[],
    	selectedTipo:[],
    	id_selec:null,
    	status: 1,
    	typo: null,

    };
    this.llenarGridData=this.llenarGridData.bind(this);
    this.send=this.send.bind(this);
    this.activar=this.activar.bind(this);
    this.desactivar=this.desactivar.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.cambiotipo=this.cambiotipo.bind(this);
    this.cerrarModalCrear=this.cerrarModalCrear.bind(this);
    this.Okconfirm=this.Okconfirm.bind(this);
  }




  async Okconfirm()
 {

try{


this.setState({modalEditar:false});
console.log(this.state.id_selec);
console.log(this.state.typo);
console.log(this.state.status);
console.log(this.state.tipocliente);

var t=parseInt(this.state.tipocliente);
console.log(t);



var a=document.getElementById('ip1').value;
var b=document.getElementById('ip2').value;
var c=document.getElementById('ip3').value;
var d=document.getElementById('ip4').value;




var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"nombre":a,"apellido": b,"telefono":d,"correo": c,"estado": this.state.status, "tipo": t});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/clientes/_doc/"+this.state.id_selec, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));




}
catch(err)
{console.error(err)}




 }

async cerrarModalCrear()
{
this.setState({modalEditar:false});




for (var v = 0; v < 2; v++) {
seleccion=undefined;

}

}



async cambiotipo(id)
{






	console.log("desactivar"+id);


try{



this.setState({id_selec: id});

seleccion='';

	await axios.get('http://34.68.215.244:9200/clientes/_doc/'+id,{
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



				var client;
				var st;

if(dato.tipo==1)
{
	client="Cliente Frecuente";
	seleccion='1';
}

if(dato.tipo==2)
{
	client="Cliente Credito";

	seleccion='2';
}

if(dato.tipo==3)
{
	client="Cliente Contado";
	seleccion='3';
}


if(dato.estado==1)
{
	st="Activo";
}

if(dato.estado==0)
{
	st="Inactivo";
}




				this.setState({
    	selectedName: dato.nombre,
    	selectedApellido: dato.apellido,
    	selectedCorreo: dato.correo,
    	selectedTelefono: dato.telefono,
    	selectedEstado: st,
    	selectedTipo: client,
    	status: dato.estado,
    	typo: dato.tipo,
    	tipocliente: dato.tipo,
				
				});

			

this.setState({modalEditar:true});

});



document.getElementById('ip1').value=this.state.selectedName;
document.getElementById('ip2').value=this.state.selectedApellido;
document.getElementById('ip3').value=this.state.selectedCorreo;
document.getElementById('ip4').value=this.state.selectedTelefono;
document.getElementById('ip5').value=this.state.selectedTipo;
document.getElementById('ip6').value=this.state.selectedEstado;




}
catch(err)
{
	console.error(err);
}



/*



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"nombre":dato.nombre,"apellido":dato.apellido,"telefono":dato.telefono,"correo": dato.correo,"estado": 1, "tipo": dato.tipo});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/clientes/_doc/"+id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/



}






activar(id)
{


	console.log("desactivar"+id);


	axios.get('http://34.68.215.244:9200/clientes/_doc/'+id,{
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

var raw = JSON.stringify({"nombre":dato.nombre,"apellido":dato.apellido,"telefono":dato.telefono,"correo": dato.correo,"estado": 1, "tipo": dato.tipo});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/clientes/_doc/"+id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


});



			this.setState({tables: []});

this.llenarGridData();




}

desactivar(id)
{
	console.log("desactivar"+id);


	axios.get('http://34.68.215.244:9200/clientes/_doc/'+id,{
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

var raw = JSON.stringify({"nombre":dato.nombre,"apellido":dato.apellido,"telefono":dato.telefono,"correo": dato.correo,"estado": 0, "tipo": dato.tipo});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/clientes/_doc/"+id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


});

			this.setState({tables: []});

this.llenarGridData();

}

handleChange(value) {
  console.log(`selected ${value}`);
  this.setState({tipocliente: value});
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







async 	send()
{
		//console.log(ds);


		for (var i = 0; i < ds.length; i++) {
		



await sleep(2000);



var arr=[];



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








	axios.get('http://34.68.215.244:9200/clientes/_doc/_search?scroll=10m&size=1000',{
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
var opt;
var tipe=""+datagrid[i]._source.tipo;

console.log(tipe);


var ids="sel"+ex;






var form=(<h3><SettingOutlined onClick={this.cambiotipo.bind(this,ex)} /></h3>);

if(estado==0)
{
	tg=(<Tag color="red">Inactivo</Tag>);
	opt=(<Button onClick={this.activar.bind(this,ex)}>Activar</Button>);
}
if(estado==1)
{
	tg=(<Tag color="green">Activo</Tag>);
		opt=(<Button onClick={this.desactivar.bind(this,ex)}>Desactivar</Button>);
}





data.push({
	"key": datagrid[i]._id,
	"nombre":datagrid[i]._source.nombre,
	"apellido":datagrid[i]._source.apellido,
	"estado": tg,
	"telefono":datagrid[i]._source.telefono,
	"email": datagrid[i]._source.correo,
	"option": opt,
	"tipo":form
	
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

//	console.log(datas);
}


render()






{




	return(
		<>



	
		<Modal visible={this.state.modalEditar} okText="Guardar" width={900} cancelText="Cancelar" onCancel={this.cerrarModalCrear} onOk={this.Okconfirm}>



<p>Información del cliente</p>

<form>
  <div className="form-group">
    <label for="Input1">Correo Electrónico</label>
    <input type="email" className="form-control" id="ip3" placeholder="name@example.com"/>
      <label for="Input2">Nombre</label>
     <input type="text" className="form-control" id="ip1" placeholder="" required/>
           <label for="Input3">Apellido</label>
     <input type="text" className="form-control" id="ip2" placeholder="" required/>
  </div>
<div className="form-group">
    <label for="ip4">Teléfono</label>
    <input type="number" className="form-control" id="ip4" placeholder="12345678"/>
 
      <label for="ip5">Tipo</label>
    <input type="text" className="form-control" id="ip5" placeholder="12345678"/>
          <label for="ip6">Estado</label>
    <input type="text" className="form-control" id="ip6" placeholder="12345678" disabled/>
  </div>

</form>
<div>
<Select defaultValue={"0"} style={{ width: 200 }} onChange={this.handleChange}>
    <OptGroup label="Tipo de Cliente">
       <Option value="0">-</Option>
      <Option value="1">Cliente Frecuente</Option>
      <Option value="2">Cliente Credito</Option>
      <Option value="3">Cliente Contado</Option>
    </OptGroup>
  </Select>
  </div>
</Modal>
		
<TablaClientesModificar datas={this.state.tables} />
</>
		);
}
}

