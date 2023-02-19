import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import Navbar from '../Navbar'
import UserProducts from './UserProducts'
import { Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import EditUser from './EditUser'
import { checkUser } from '../actions/userActions';


class ProductSummary extends Component {

   


    render () {
        const items = this.props.product.map((item => 
           <li> Item {item.id} | Price: {item.price} | Title: {item.title}<br></br>
           {item.description}<br></br>
           <Img src={item.image_url}></Img>
            </li>
        ))        
        return (
        <div>
           
            {items}
        
        </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      checkUser: () =>  { dispatch(checkUser()) },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductSummary)
