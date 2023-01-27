import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Header} from 'semantic-ui-react'

export default function Greeting() {
    return (
        <div className="container">   
        <center>
        <Header size='huge' color='grey' style={{marginTop: '2%'}}>
          Welcome to Marketplace Crafts
        </Header>
        <Header.Subheader size='huge' color='black' style={{marginBottom: '2%'}}>
        Shop crafted homegoods by independent sellers or sell your own!
        </Header.Subheader>
        </center>
      </div>
  );
}