import React, {Component} from 'react';
import { connect } from "react-redux";
import { Header, Item, Divider} from 'semantic-ui-react'
import { checkUser } from '../actions/userActions';


class UserSoldProducts extends Component {

    render () {
       const products = this.props.user.products.map( prod => {
        return(<Item style={{width:"540px", marginLeft:"8%", display: "inline-block"}}>
        <Item.Image floated="left" rounded src={prod.image_url} size= "small" />
       
        <Item.Content>
            <Item.Header as="h4" style={{fontWeight:"normal", marginTop:"1%"}}>{prod.title}: Sold {prod.updated_at.slice(6, -14)}-2023
            | <i>user {prod.buyer}</i> </Item.Header>
            <br></br>
            
            Posted: {prod.created_at.slice(6, -14)}<br></br>
            Price: ${prod.price}<br></br>

           {prod.description} <br></br>
        </Item.Content>      <br></br><br></br>
    </Item>)})
        return (
                    <div>   
 <Header centered as="h2">Sold Items</Header> 
                        <Divider></Divider>                        
                        <Item.Group >
                        {products}
                        </Item.Group> <br></br>
                       
                    </div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserSoldProducts)