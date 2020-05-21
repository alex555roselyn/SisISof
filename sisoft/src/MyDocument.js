import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
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
for (var i = 0; i <9; i++) {
data.push(<Text>hola</Text>);

}



// Create Document Component
 const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
      <Text>Clientes</Text>
       {data}
      </View>
   
    </Page>
  </Document>
);


 export default MyDocument;