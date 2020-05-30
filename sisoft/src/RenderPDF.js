import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument.js';


export default class RenderPDF  extends React.Component {
 constructor(props) {
    super(props);
this.state = {
    collapsed: false,
    modalNuevo: false,
    adminvisible: true
   };

 }


  render() {

var data=this.props.data;

//console.log("pass");

    return (

      <PDFViewer width={900} height={700}>
    <MyDocument  data={data}/>
  </PDFViewer>

    );
  }
}
