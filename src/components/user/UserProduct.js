import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Header, Item, Modal, Divider } from 'semantic-ui-react';
import EditProduct from '../products/EditProduct';
import { checkUser } from '../actions/userActions';
import { deleteProduct } from '../actions/productActions';

class UserProduct extends Component {

    state = {
        modalOpen: false
    };

    handleOpen = () => {
        this.setState({ modalOpen: true });
    };

    handleClose = () => {
        this.setState({ modalOpen: false });
        this.props.checkUser()
    };

    handleDelete = (event, id) => {
        event.preventDefault()
        this.props.deleteProduct(id)
        this.props.checkUser()
    };
  
    render () {
        let prod = this.props.prod
        return (      
            <div className="profileProducts">
                <Item style={{width:"570px", verticalAlign:"middle", marginLeft:"3%", display: "inline-block"}}>
                    <Header as="h3">{prod.title}</Header>
                    {prod.buyer ?
                        <p style={{marginTop:"-1.5%"}}><b>Sold</b> | user {prod.buyer} on {prod.updated_at.substring(0, 10)}</p>
                    : 
                        <p style={{marginTop:"-1.2%"}}>  
                            <Button size="tiny" basic color="black" circular floated="right" onClick={(event) => { this.handleDelete(event, prod.id)}}>Delete</Button>
                            <Button size="tiny" floated="right"  basic color="black" circular onClick={this.handleOpen}>Update</Button>
                            <b>Active</b>
                        </p> 
                    }               
                    <Item.Image floated="left" rounded src={prod.image_url} size= "small" />
                    Price:  ${prod.price.toFixed(2)}<br />
                    Posted: {prod.created_at.substring(0, 10)}<br />
                    Description: {prod.description} <br />
                </Item>
                <Divider></Divider>
                <Modal 
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    closeIcon
                >
                    <Modal.Content >
                        <EditProduct product={prod} key={prod.id} handleClose={this.handleClose} />
                    </Modal.Content>
                </Modal>
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        checkUser: () =>  { dispatch(checkUser()) },
        deleteProduct: (product) =>  { dispatch(deleteProduct(product)) }
    }
};

export default connect(null, mapDispatchToProps)(UserProduct);