import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
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


export default class MyDocument   extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
    collapsed: false,
    modalNuevo: false,
    adminvisible: true
   };

 }


 componentDidMount()
{

console.log("prueba");



}



  render() {

var v=this.props.data;

console.log(v);


    return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
      <Text>Clientes</Text>
  <Text>{v[0]}</Text>
      </View>
   
    </Page>
  </Document>

    );
  }
}
