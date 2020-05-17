import React from 'react';


import Menus from './Menu.js';



export default class App extends React.Component {






  componentDidMount() {
  try{
  console.log("init");
  }catch(err){

  }
}

  render() {
    return (
      <>
      <Menus/>
      </>
         );
  }
}
