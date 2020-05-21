import React from 'react';
import TablaCatalogo from './TablaCatalogo.js';
import datas from './data.js';
import axios from 'axios';
import ds from './Imagenes.js';
import { Tag } from 'antd';
import imagen1 from './Images/imagen1.png';
import imagen2 from './Images/imagen2.png';
import imagen3 from './Images/imagen3.png';
import imagen4 from './Images/imagen4.png';
import imagen5 from './Images/imagen5.png';
import imagen6 from './Images/imagen6.png';
import imagen7 from './Images/imagen7.png';
import imagen8 from './Images/imagen8.png';
import imagen9 from './Images/imagen9.png';
import imagen10 from './Images/imagen10.png';
//import imagen11 from './Images/imagen11.png';
//import imagen12 from './Images/imagen12.png';
import imagen13 from './Images/imagen13.png';
import imagen14 from './Images/imagen14.png';
import imagen15 from './Images/imagen15.png';
import imagen16 from './Images/imagen16.png';
import imagen17 from './Images/imagen17.png';
import imagen18 from './Images/imagen18.png';
//import imagen19 from './Images/imagen19.png';
import imagen20 from './Images/imagen20.png';
import imagen21 from './Images/imagen21.png';
import imagen22 from './Images/imagen22.png';
import imagen23 from './Images/imagen23.png';
import imagen24 from './Images/imagen24.png';
import imagen25 from './Images/imagen25.png';
import imagen26 from './Images/imagen26.png';
import imagen27 from './Images/imagen27.png';
import imagen28 from './Images/imagen28.png';
import imagen29 from './Images/imagen29.png';
import imagen30 from './Images/imagen30.png';
import imagen31 from './Images/imagen31.png';
import imagen32 from './Images/imagen32.png';
import imagen33 from './Images/imagen33.png';
import imagen34 from './Images/imagen34.png';
import imagen35 from './Images/imagen35.png';
import imagen36 from './Images/imagen36.png';
import imagen37 from './Images/imagen37.png';
import imagen38 from './Images/imagen38.png';
//import imagen39 from './Images/imagen39.png';
import imagen40 from './Images/imagen40.png';
import imagen41 from './Images/imagen41.png';
import imagen42 from './Images/imagen42.png';
import imagen43 from './Images/imagen43.png';
import imagen44 from './Images/imagen44.png';
//import imagen45 from './Images/imagen45.png';
//import imagen46 from './Images/imagen46.png';
import imagen47 from './Images/imagen47.png';
//import imagen48 from './Images/imagen48.png';
//import imagen49 from './Images/imagen49.png';
import imagen50 from './Images/imagen50.png';
import imagen51 from './Images/imagen51.png';
import imagen52 from './Images/imagen52.png';
import imagen53 from './Images/imagen53.png';
import imagen54 from './Images/imagen54.png';
import imagen55 from './Images/imagen55.png';
import imagen56 from './Images/imagen56.png';
import imagen57 from './Images/imagen57.png';
import imagen58 from './Images/imagen58.png';
import imagen59 from './Images/imagen59.png';
//import imagen60 from './Images/imagen60.png';
import imagen61 from './Images/imagen61.png';
import imagen62 from './Images/imagen62.png';
import imagen63 from './Images/imagen63.png';
import imagen64 from './Images/imagen64.png';
import imagen65 from './Images/imagen65.png';
import imagen66 from './Images/imagen66.png';
import imagen67 from './Images/imagen67.png';
import imagen68 from './Images/imagen68.png';
import imagen69 from './Images/imagen69.png';
import imagen70 from './Images/imagen70.png';

import { Table, Input, Button ,Modal, Col, Row} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined,PushpinFilled,ShoppingCartOutlined} from '@ant-design/icons';
import Navbar from 'react-bootstrap/Navbar'

const ar=["imagen0",imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9,
 imagen10, "imagen11", "imagen12", imagen13, imagen14, imagen15, imagen16, imagen17, imagen18,
  "imagen19", imagen20, imagen21, imagen22, imagen23, imagen24, imagen25, imagen26, imagen27,imagen28,
   imagen29, imagen30, imagen31, imagen32, imagen33, imagen34, imagen35, imagen36,imagen37, imagen38,
    "imagen39", imagen40, imagen41, imagen42, imagen43, imagen44, "imagen45", "imagen46", imagen47, "imagen48",
     "imagen49", imagen50, imagen51, imagen52, imagen53, imagen54, imagen55, imagen56, imagen57, imagen58,
      imagen59, "imagen60", imagen61, imagen62, imagen63, imagen64, imagen65, imagen66, imagen67, imagen68, imagen69,imagen70];





function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




var data=[];
var tab2=[];
var orden=[];
var precios=[];
var suma=0;


export default class OrdenesCompra extends React.Component {
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
    cantidad:null
    };
    this.llenarGridData=this.llenarGridData.bind(this);
    this.send=this.send.bind(this);
      this.onSelectChange=this.onSelectChange.bind(this);
          this.abrirModal=this.abrirModal.bind(this);
              this.cerrarModalCrear=this.cerrarModalCrear.bind(this);
              this.Okconfirm=this.Okconfirm.bind(this);
              this.getOrder=this.getOrder.bind(this);

}
  












async 	send()
{
		//console.log(ds);


		for (var i = 0; i < ds.length; i++) {
		



sleep(2000);



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


	axios.get('http://34.68.215.244:9200/productos/_doc/_search?scroll=10m&size=1000',{
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


const im=[imagen1,imagen2,imagen3];

console.log(im);

var ex=datagrid[i]._source.id;

var ilus=(<img height={50} width={50} src={ar[ex]}/>)

var cantidad=datagrid[i]._source.existencia;
var tg;

if(cantidad>0)
{
	tg=(<Tag color="green">{cantidad}</Tag>);
}
if(cantidad<1)
{
	tg=(<Tag color="red">{cantidad}</Tag>);
}


data.push({
	"id" : datagrid[i]._source.id,
	"key": datagrid[i]._id,
	"name":datagrid[i]._source.name,
	"precio":"Q."+datagrid[i]._source.precio,
	"nombre_imagen": ilus,
	"existencias": tg,
	"estado": datagrid[i]._source.estado
	
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






async getOrder()
{




	try{


const {selectedRowKeys}=this.state;
var conter=selectedRowKeys.length;
var arreglo=selectedRowKeys;



if(conter>0)
{
	this.setState({visiblebutton: false});
}
if(conter==0)
{
	this.setState({visiblebutton: true});
}


this.setState({cantidad: conter});


const {tab2}=this.state;


var xc;
var ps;


orden=[];
precios=[];
suma=0;

var volumen=[]


for (var p = 0; p < conter; p++) {

xc=arreglo[p];

await	axios.get('http://34.68.215.244:9200/productos/_doc/'+arreglo[p],{
			headers: {
				//'Authorization': 'Bearer ' + Cookies("token")
				//'Authorization' : 'Basic ZWxhc3RpYzpZcDlFaU9PVDZjOWY2V2lqMVlWNUlaMmI='
			}
		})
			.then(res => {
				this.setState({
					 prod: res.data._source
				});

				//console.log(res.data.hits);

const {prod}=this.state;
console.log(prod);
var ex=prod.id;
var ilus=(<img height={50} width={50} src={ar[ex]}/>)

ps=prod.precio;


suma=suma+ps;
console.log(suma+"es el total");
this.setState({total : suma});


var cantidad=prod.existencia;
var tg;

if(cantidad>0)
{
	tg=(<Tag color="green">{cantidad}</Tag>);
}
if(cantidad<1)
{
	tg=(<Tag color="red">{cantidad}</Tag>);
}



orden.push(xc);
precios.push(ps);

volumen.push({

	key: xc,
	id : ex,
	name:prod.name,
	precio:"Q."+prod.precio,
	nombre_imagen: ilus,
	existencias : tg,
	estado : prod.estado
	
});


console.log(volumen);



			});

		


}

	this.setState({tab2: volumen});


console.log(orden);

console.log(precios);

console.log(this.state.total);

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




  getColumnSearchProps = dataIndex => ({



    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };




componentDidMount()
{
	for (var i = 0; i < 2; i++) {
	this.llenarGridData();
	}

//	console.log(datas);
}


render()
{




const datas=this.props.datas;
console.log(datas);


const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;





    const columns = [
       {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: '4%',
        ...this.getColumnSearchProps('id'),
      },
      {
        title: 'Producto',
        dataIndex: 'name',
        key: 'name',
        width: '70%',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Precio',
        dataIndex: 'precio',
        key: 'precio',
        width: '10%',
        ...this.getColumnSearchProps('precio'),
      },
      {
        title: 'Ilustración',
        dataIndex: 'nombre_imagen',
        key: 'nombre_imagen',
        width: '10%',
   
      },
          {
        title: 'Existencias',
        dataIndex: 'existencias',
        key: 'existencias',
        width: '10%',
      
      },
   
    ];





	return(
		<>

<p><Row>
<Col offset={2} span={2}>
	<Button onClick={this.abrirModal} className="rounded-pill text-info">Seleccionar Productos-></Button>

	</Col>
<Col offset={5} span={2}>
<Button hidden={this.state.visiblebutton} className="rounded-pill text-info">Generar Orden de Compra-></Button></Col>
<Col offset={20} span={4}><span>
Total <ShoppingCartOutlined /><sup>{this.state.cantidad}</sup>
     <Navbar bg="secondary" variant="dark" fixed="button" className="rounded-sm"><u> Q.{this.state.total}</u></Navbar></span>

</Col>
</Row>
<Row>
<Col offset={3} span={2}>
<Tag color="cyan">Paso 1</Tag>
	</Col>
<Col offset={5} span={2}>
<Tag color="gold" hidden={this.state.visiblebutton}>Paso 2</Tag></Col>

</Row></p>
<Table rowSelection={rowSelection}  columns={columns} dataSource={this.state.tab2} />


<Modal visible={this.state.modalNuevo} okText="Guardar" width={900} cancelText="Cerrar" onCancel={this.cerrarModalCrear} onOk={this.Okconfirm}>
	<Table rowSelection={rowSelection}  columns={columns} dataSource={this.state.tables} />
</Modal>
	

	
</>
		);
}
}

