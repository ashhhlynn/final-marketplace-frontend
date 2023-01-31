import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { Menu, Header} from 'semantic-ui-react'
import { logOut } from './actions/userActions'
import { connect } from "react-redux"

class Navbar extends Component {

  handleItemClick(e){
    e.preventDefault()
    localStorage.clear()
    this.props.logOut()
  }
  
  render() {
    return (
      <Menu color='teal' pointing secondary>
        <Header size='large' color='teal' style={{marginTop: '2%'}}>
          <b><i>Handmade Market</i></b>
        </Header>
        <Menu.Menu position="right" >
          <Menu.Item size='huge'><Link to="/">Profile</Link></Menu.Item>
          <Menu.Item><Link to ="/createproduct">Create Product</Link></Menu.Item>
          <Menu.Item onClick={(e) => {this.handleItemClick(e)}}><Link to="/">Log Out</Link></Menu.Item>
        </Menu.Menu> 
      </Menu>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { logOut: () => { dispatch(logOut()) } }
}

export default connect(null, mapDispatchToProps)(Navbar)