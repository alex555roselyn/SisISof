import React from 'react';

import Keycloak from 'keycloak-js';
import Menus from './Menu.js';



   var keycloak = Keycloak({
                 url: 'http://104.198.180.31:8080/auth/',
    realm: 'SPRINGCLEANING',
    clientId: 'spring'
                });


         keycloak.init({ onLoad: 'login-required' }).then(function(authenticated) {
                  //  alert(authenticated ? 'authenticated' : 'not authenticated');
                }).catch(function() {
                    //alert('failed to initialize');

                    window.location.reload();
                });    



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  menu: []
  
};

}











  componentDidMount() {
  try{
//keycloak();

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
