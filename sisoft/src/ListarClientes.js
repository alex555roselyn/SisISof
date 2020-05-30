import React from 'react';
import TablaClientes from './TablaClientes.js';

import axios from 'axios';
import ds from './Imagenes.js';
import { Tag } from 'antd';



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




var data=[];

export default class ListarClientes extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    	datagrid:[],
    	tables:[]
    };
    this.llenarGridData=this.llenarGridData.bind(this);
    this.send=this.send.bind(this);
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





var estado=datagrid[i]._source.estado;
var tg;

if(estado===0)
{
	tg=(<Tag color="red">Inactivo</Tag>);
}
if(estado===1)
{
	tg=(<Tag color="green">Activo</Tag>);
}


data.push({
	"key": datagrid[i]._id,
	"nombre":datagrid[i]._source.nombre,
	"apellido":datagrid[i]._source.apellido,
	"estado": tg,
	"telefono":datagrid[i]._source.telefono,
	"email": datagrid[i]._source.correo
	
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
		
<TablaClientes datas={this.state.tables} />
</>
		);
}
}

