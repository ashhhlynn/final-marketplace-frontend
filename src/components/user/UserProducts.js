import React, {Component} from 'react';
import { connect } from "react-redux";
import EditProduct from './EditProduct'
import { Button, Header, Item, Modal, Divider, Icon, Grid, Menu} from 'semantic-ui-react'
import { checkUser } from '../actions/userActions';
import AccountNav from './AccountNav'
import {deleteProduct} from '../actions/productActions'


class UserProducts extends Component {

    state = {
        modalOpen: false,
    }

    handleOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleClose = () => {
        this.props.checkUser()

        this.setState({ modalOpen: false });
    }
     
    
handleDelete = (event, id) => {
    event.preventDefault()
    this.props.deleteProduct(id)
    this.props.checkUser()

  }
 

    render () {
        const products = this.props.user.products.map( prod => {
            return (
                <div>
                <Item style={{width:"630px", display: "inline-block"}}>
                    <Item.Image floated="left" rounded src={prod.image_url} size= "medium" />
                    <Item.Extra>
                        <Button size="small" style={{marginTop:"-.55%"}} inverted circular floated="right" onClick= { (event) => { this.handleDelete(event, prod.id)}}>
                         <Icon color="grey" name="close" />
                        </Button>
                        <Button size="mini" circular floated="right" onClick={this.handleOpen}>EDIT</Button>
                    </Item.Extra>
                    <Item.Content>
                        <Item.Header as="h4" style={{fontWeight:"normal", marginTop:"1%"}}>{prod.title}</Item.Header>
                        Posted: {prod.created_at.slice(6, -14)}<br></br>
                        Price: ${prod.price}<br></br> {prod.description} <br></br>
                    </Item.Content>      <br></br><br></br>
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
             </div>
          
        )
    })
        return (
            <div>   
                <Grid columns={2} stackable textAlign='left'>
                    <Grid.Column style= {{width : "370px"}}>
                        <AccountNav/>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft:"8%", marginTop:"2%"}}><div>
                       
                        <Header as="h2">Active Items</Header> 
                        <Divider></Divider>
                    
                        <Item.Group >
                            {products}   
                        </Item.Group> <br></br>
                     
                        <Header centered as="h2">Sold Items</Header> 
                        <Divider></Divider>
                        </div>
                    </Grid.Column> 
                </Grid>
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
      deleteProduct: (product) =>  { dispatch(deleteProduct(product)) },

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserProducts)