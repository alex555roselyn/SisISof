import React from 'react';


import axios from 'axios';

import { Modal,Button} from 'antd';

import { PDFViewer } from '@react-pdf/renderer';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 15,
    padding: 10,
    flexGrow: 20
  }
});


var data=[];

export default class ListarOrdenesInfo extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    	datagrid:[],
    	tables:[],
    	visible: false,
    };
    this.llenarGridData=this.llenarGridData.bind(this);
this.cerrarshowInforme=this.cerrarshowInforme.bind(this);
    this.abrir=this.abrir.bind(this);
  }






//Funcion que se ejecuta antes del renderizado de la pagina para llenar la tabla de datos
componentWillMount() {
	try{


		
	}catch(err){
		console.error('#ERROR Error en willMount de la pagina de formularios: ' + err);
	}
}












abrir()
{
	this.setState({visible: true})
}


cerrarshowInforme()
{
	this.setState({visible: false})
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






var estado=datagrid[i]._source.estado;
var tg;

if(estado===0)
{
	tg="Inactivo";
}
if(estado===1)
{
	tg="Activo";
}




data.push(

<Text>{datagrid[i]._source.nombre} {datagrid[i]._source.apellido} {datagrid[i]._source.telefono}          {tg}           Q.{datagrid[i]._source.subtotal}</Text>
	
);





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
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;





	return(
		<>
		<Button onClick={this.abrir} className="rounded-pill text-info">Generar</Button>
<Modal visible={this.state.visible} okText="Guardar" width={900} cancelText="Cerrar" onCancel={this.cerrarshowInforme} onOk={this.cerrarshowInforme}>
      <PDFViewer width={900} height={700}>
<Document title="Factura Contable">
    <Page size="Letter" style={styles.page}>

 <View style={{
   color: 'black', margin: 30 
    }
  }>  


  <Text style={{textAlign: 'center'}}>Spring Cleaning inc.</Text>
     <Text style={{textAlign: 'center'}}>Informe de Ventas</Text>
        <Text style={{textAlign: 'center'}}>__________</Text>
          <Text style={{textAlign: 'center'}}>Activos-Inactivos</Text>
               <Text style={{textAlign: 'center'}}>__________</Text>
      <View style={styles.section}>

      <Text style={{textAlign: 'center'}}>Fecha: {today}</Text>
      <Text>Ventas</Text>
           <Text>___________________________________________________</Text>
            <Text>Nombre                Telefono            Estado               Total</Text>
       {data}
            <Text>___________________________________________________</Text>

      </View>
       
 
      

   </View>
    </Page>
  </Document>
  </PDFViewer>		
</Modal>
</>
		);
}
}

