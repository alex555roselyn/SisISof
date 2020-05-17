import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
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
  ExpandAltOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard.js';
import Meseros from './Home.js';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Menus extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
           INICIO
                <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" hidden={true} icon={<DesktopOutlined />}>
           INICIO
            </Menu.Item>
            <SubMenu key="sub1" icon={<HeartOutlined />} title="Productos">
              <Menu.Item key="3" icon={<SettingOutlined />}>Mantenimiento <Link to="/mantenimiento" /></Menu.Item>
              <Menu.Item key="4" icon={<OrderedListOutlined />}>Listar<Link to="/listar&prod" /></Menu.Item>
              <Menu.Item key="5" icon={<FormOutlined />}>Modificar<Link to="/modificar&prod" /></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Pedidos">
              <Menu.Item key="6" icon={<OrderedListOutlined />}>Ordenes<Link to="/ordenes" /></Menu.Item>
              <Menu.Item key="8" icon={<EditOutlined />}>Nuevo<Link to="/ordenes&nuevo" /></Menu.Item>
              <Menu.Item key="9" icon={<ExpandAltOutlined />}>Graficas<Link to="/graficas" /></Menu.Item>
            </SubMenu>
                <SubMenu key="sub3" icon={<TeamOutlined />} title="Clientes">
              <Menu.Item key="10" icon={<AuditOutlined />}>Listar<Link to="/listar&clientes" /></Menu.Item>
              <Menu.Item key="11" icon={<EditOutlined />}>Nuevo<Link to="/clientes&nuevo" /></Menu.Item>
            </SubMenu>
               <SubMenu key="sub4" icon={<ContainerOutlined />} title="Inventario">
              <Menu.Item key="12" icon={<OrderedListOutlined />}>Listar<Link to="/inventario" /></Menu.Item>
            </SubMenu>

            <SubMenu key="sub5" icon={<FileOutlined />} title="Facturación">
              <Menu.Item key="13" icon={<OrderedListOutlined />}>Listar<Link to="/listar&facturas" /></Menu.Item>
              <Menu.Item key="14" icon={<EditOutlined />}>Nueva<Link to="/factura&nuevo" /></Menu.Item>
            </SubMenu>
               <SubMenu key="sub6" icon={<PrinterOutlined />} title="Informes">
              <Menu.Item key="15" icon={<FilePdfOutlined />}>Info de Clientes y Descuentos<Link to="/informe&clientes" /></Menu.Item>
              <Menu.Item key="16" icon={<FilePdfOutlined />}>Info de Productos<Link to="/informe&productos" /></Menu.Item>
              <Menu.Item key="17" icon={<FilePdfOutlined />}>Info de Ventas<Link to="/informe&ventas" /></Menu.Item>
            </SubMenu>
            
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Inicio</Breadcrumb.Item>
              <Breadcrumb.Item>Hola</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

     <Route exact path="/" component={Dashboard} />
      <Route path="/meseros" component={Meseros} />

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}
