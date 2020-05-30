import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,Button, Tooltip,Modal,message} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  ContainerOutlined,
  PrinterOutlined,
  HeartOutlined,
  SettingOutlined,
  EditOutlined,
  FormOutlined,
  AuditOutlined,
  OrderedListOutlined,
  FilePdfOutlined,
  ExpandAltOutlined,
  CalculatorOutlined,
  UserOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard.js';
import Meseros from './Home.js';
import Listar from './Listar.js';
import ListarClientes from './ListarClientes.js';
import ListarClientesModificar from './ListarClientesModificar.js';
import Mantenimiento from './Mantenimiento.js';
import RenderPDF from './RenderPDF.js';
import OrdenesCompra from './OrdenesCompra.js';
import InsertarClientes from './InsertarClientes.js';
import App2 from './App2.js';
import Filereader from './CargarCsv.js';
import ListarOrdenes from './ListarOrdenes.js';
import ListarClientesInfo from './ListarClientesInfo.js';
import ListarOrdenesInfo from './ListarOrdenesInfo.js';
import ListarProductosInfo from './ListarProductosInfo.js';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default class Menus extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    collapsed: false,
    modalNuevo: false,
    adminvisible: true
   };
   this.cerrarModalCrear=this.cerrarModalCrear.bind(this);
   this.Okconfirm=this.Okconfirm.bind(this);
   this.showmodal=this.showmodal.bind(this);
   this.salir=this.salir.bind(this);
   this.admin=this.admin.bind(this);
   this.user=this.user.bind(this);
 }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };






cerrarModalCrear()
{



  this.setState({modalNuevo: false});


}


admin()
{



var a=prompt("Ingrese clave");


if(a=="4719")

{
    message.success('Satisfactorio');
    message.info('Ahora está en modo administrador');
  this.setState({adminvisible: false});
}

else
{
  message.error('Las credenciales son invalidas');}

  


}










user()
{
      message.info('Ahora está en modo operador');

  this.setState({adminvisible: true});
}





Okconfirm()
{



  this.setState({modalNuevo: false});


}


showmodal()
{

  this.setState({modalNuevo: true});
}





salir()
{
  var uri="http://104.198.180.31:8080/auth/realms/SPRINGCLEANING/protocol/openid-connect/logout?redirect_uri=http%3A%2F%2Flocalhost%3A3000";

  window.location.href = uri;
}












  render() {



    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>

      <p><Button style={{position: 'fixed', top: '8%', right: 50}} onClick={this.showmodal} className="rounded-pill text-info" data-toggle="tooltip" title="Calculadora"><CalculatorOutlined/></Button>  </p>

    
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
<Modal visible={this.state.modalNuevo} okText="Guardar" width={500} cancelText="Cerrar" onCancel={this.cerrarModalCrear} onOk={this.Okconfirm} style={{ top: 20 }}>
<App2/>
</Modal>
  

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
           INICIO
                <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" hidden={true} icon={<DesktopOutlined />}>
           INICIO
            </Menu.Item>
            <SubMenu key="sub1" icon={<HeartOutlined />} title="Productos">
              <Menu.Item key="3" icon={<SettingOutlined />} hidden={this.state.adminvisible} >Mantenimiento <Link to="/mantenimiento" /></Menu.Item>
              <Menu.Item key="4" icon={<OrderedListOutlined />}>Listar<Link to="/listar&prod" /></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Pedidos">
              <Menu.Item key="5" icon={<OrderedListOutlined />} hidden={this.state.adminvisible}>Ordenes<Link to="/ordenes" /></Menu.Item>
              <Menu.Item key="6" icon={<EditOutlined />}>Nuevo<Link to="/ordenes&nuevo" /></Menu.Item>
              <Menu.Item key="7" icon={<ExpandAltOutlined />} hidden={true}>Graficas<Link to="/graficas" /></Menu.Item>
              <Menu.Item key="7-1" icon={<ExpandAltOutlined />}  hidden={this.state.adminvisible} >Cargar via CSV<Link to="/csv" /></Menu.Item>
            </SubMenu>
                <SubMenu key="sub3" icon={<TeamOutlined />} title="Clientes">
              <Menu.Item key="8" icon={<AuditOutlined />}>Listar<Link to="/listar&clientes" /></Menu.Item>
              <Menu.Item key="9" icon={<EditOutlined />}>Nuevo<Link to="/clientes&nuevo" /></Menu.Item>
                <Menu.Item key="10" icon={<FormOutlined />} hidden={this.state.adminvisible}>Modificar<Link to="/modificar&clientes" /></Menu.Item>
            </SubMenu>
               <SubMenu key="sub4" icon={<ContainerOutlined />} title="Inventario">
              <Menu.Item key="11" icon={<OrderedListOutlined />}>Listar<Link to="/inventario" /></Menu.Item>
            </SubMenu>

            <SubMenu key="sub5" hidden={true} icon={<FileOutlined />} title="Facturación">
              <Menu.Item key="12" icon={<OrderedListOutlined />}>Listar<Link to="/listar&facturas" /></Menu.Item>
              <Menu.Item key="13" icon={<EditOutlined />}>Nueva<Link to="/factura&nuevo" /></Menu.Item>
            </SubMenu>
               <SubMenu key="sub6" icon={<PrinterOutlined />} title="Informes">
              <Menu.Item key="14" icon={<FilePdfOutlined />}>Info de Clientes y Descuentos<Link to="/informe&clientes" /></Menu.Item>
              <Menu.Item key="15" icon={<FilePdfOutlined />}>Info de Productos<Link to="/informe&productos" /></Menu.Item>
              <Menu.Item key="16" icon={<FilePdfOutlined />}>Info de Ventas<Link to="/informe&ventas" /></Menu.Item>
            </SubMenu>
                         <SubMenu key="sub7" icon={<UserOutlined />} title="Cuenta">
              <Menu.Item key="17" icon={<FilePdfOutlined />}><Button className="rounded-pill text-info" data-toggle="tooltip" title="Cerrar Sesion" onClick={this.salir}>Log-Out</Button></Menu.Item>
                 <Menu.Item key="18" icon={<FilePdfOutlined />}><Button className="rounded-pill text-info" data-toggle="tooltip" title="ADMINISTRADOR" onClick={this.admin}>Administrar</Button></Menu.Item>
                                  <Menu.Item key="19" icon={<FilePdfOutlined />}><Button className="rounded-pill text-info" data-toggle="tooltip" title="User" onClick={this.user}>Operador</Button></Menu.Item>

            </SubMenu>
            






          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>SISOFT</Breadcrumb.Item>
              
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

     <Route exact path="/" component={Dashboard} />
      <Route exact path="/mantenimiento" component={Mantenimiento} />
      <Route exact path="/listar&prod" component={Listar} />
        <Route exact path="/ordenes" component={ListarOrdenes} />
       <Route exact path="/ordenes&nuevo" component={OrdenesCompra} />
       <Route exact path="/listar&clientes" component={ListarClientes}/>
       <Route exact path="/clientes&nuevo" component={InsertarClientes}/>
       <Route exact path="/modificar&clientes" component={ListarClientesModificar}/>
           <Route exact path="/csv" component={Filereader} />
         <Route exact path="/informe&clientes" component={ListarClientesInfo} />
                  <Route exact path="/informe&ventas" component={ListarOrdenesInfo} />
                          <Route exact path="/informe&productos" component={ListarProductosInfo} />
                          <Route exact path="/inventario" component={Listar} />
         
      

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>UMG ©2018 Created by UMG</Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}
