import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument.js';

const RenderPDF = () => (
  <PDFViewer width={900} height={700}>
    <MyDocument />
  </PDFViewer>
);

export default RenderPDF;