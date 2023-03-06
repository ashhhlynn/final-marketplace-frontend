import EditProduct from '../products/EditProduct'
import React, {Component} from 'react';
import { connect } from "react-redux";
import { Button, Header, Item, Modal, Divider, Icon} from 'semantic-ui-react'
import { checkUser } from '../actions/userActions';
import {deleteProduct} from '../actions/productActions'

class UserProduct extends Component {

state = {
    modalOpen: false,
}

handleOpen = () => {
    this.setState({ modalOpen: true });
}

handleClose = () => {
    this.setState({ modalOpen: false });
    this.props.checkUser()

}
handleDelete = (event, id) => {
    event.preventDefault()
    this.props.deleteProduct(id)
    this.props.checkUser()

  }
  render () {

    let prod= this.props.prod
        return (
        
        <div>
<Item style={{width:"630px", verticalAlign:"middle", marginLeft:"0%", display: "inline-block"}}>
                    <Item.Image floated="left" rounded src={prod.image_url} size= "medium" />
                    <Item.Extra>
                        <Button size="small" style={{marginTop:"0%"}} inverted circular floated="right" onClick= { (event) => { this.handleDelete(event, prod.id)}}>
                         <Icon color="grey" name="close" />
                        </Button>
                        <Button size="small"  floated="right" onClick={this.handleOpen}>Edit</Button>
                    </Item.Extra>
                    <Item.Content>
                        <Item.Header as="h3" style={{fontWeight:"normal", marginTop:"1%"}}>{prod.title}</Item.Header>
                        <Item.Description>
                        Price:  ${prod.price}<br></br>
                        Posted: {prod.created_at.slice(6, -14)}<br></br>
                        {prod.buyer ?
                        <p>Buyer: user {prod.buyer}<br></br>Sell date: {prod.updated_at.slice(6, -14)}</p>
                        : 
                        <p>Active</p>
                       
                    } 
                       Description: {prod.description} <br></br>

                     </Item.Description>
                     
                    </Item.Content> 
                    
                         <br></br><br></br>
                </Item>
                <Modal style={{ display: "inline-block", width: "600px"}}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                <Modal.Content>
                    <EditProduct product={prod} key={prod.id} handleClose={this.handleClose}/>
                </Modal.Content>
                </Modal>
             </div>)}

}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      checkUser: () =>  { dispatch(checkUser()) },
      deleteProduct: (product) =>  { dispatch(deleteProduct(product)) },

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserProduct)