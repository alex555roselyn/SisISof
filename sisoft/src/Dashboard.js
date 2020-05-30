import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import  {Button} from 'react-bootstrap';

export default class Dashboard extends React.Component {


  render() {
    return (
      <>
     <Jumbotron>
  <h1>Hola!</h1>
  <p>
    Bienvenido a SISOFT un sistema pensado para usted.
  </p>
  <p>
    <Button variant="primary">Leer Mas</Button>
  </p>
</Jumbotron>
      </>
         );
  }
}
