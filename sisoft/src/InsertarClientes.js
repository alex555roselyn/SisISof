import React from 'react';

import { Button} from 'antd';

//import Form 'react-bootstrap/Form'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}






export default class InsertarClientes extends React.Component {
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



console.log(document.getElementById('Select1').value);
console.log(document.getElementById('Input1').value);
console.log(document.getElementById('Input2').value);
console.log(document.getElementById('Input3').value);
console.log(document.getElementById('Input4').value);

		//console.log(ds);


var a=document.getElementById('Input1').value;
var b=document.getElementById('Input2').value;
var c=document.getElementById('Input3').value;
var d=document.getElementById('Input4').value;
var e=parseInt(document.getElementById('Select1').value);
		



await sleep(2000);





var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"nombre": b,"apellido": c,"tipo":e,"telefono":d,"estado": 1,"correo": a});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://34.68.215.244:9200/clientes/_doc/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));




document.getElementById('Select1').value=0;
document.getElementById('Input1').value='';
document.getElementById('Input2').value='';
document.getElementById('Input3').value='';
document.getElementById('Input4').value='';


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






componentDidMount()
{






//	console.log(datas);
}





render()




{






	return(
<form>
  <div className="form-group">
    <label for="Input1">Correo Electrónico</label>
    <input type="email" className="form-control" id="Input1" placeholder="name@example.com"/>
      <label for="Input2">Nombre</label>
     <input type="email" className="form-control" id="Input2" placeholder="" required/>
           <label for="Input3">Apellido</label>
     <input type="email" className="form-control" id="Input3" placeholder="" required/>
  </div>
  <div className="form-group">
    <label for="Select1">Tipo de Cliente</label>
    <select className="form-control" id="Select1">
    <option default value="0">Seleccione Tipo</option>
      <option value="1">Cliente Frecuente</option>
      <option value="2">Cliente Credito</option>
       <option value="3">Cliente Contado</option>
 
    </select>
  </div>
<div className="form-group">
    <label for="Input1">Teléfono</label>
    <input type="number" className="form-control" id="Input4" placeholder="12345678"/>
  </div>
  <Button className="rounded-pill text-info" onClick={this.send}>Guardar</Button>
</form>
		);
}
}

