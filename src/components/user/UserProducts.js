import React, {Component} from 'react';
import { connect } from "react-redux";
import EditProduct from '../products/EditProduct'
import { Button, Modal, Card} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class UserProducts extends Component {

    state = {
        modalOpen: false,
        modalTwoOpen: false,

    }
  
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleClose = () => {
        this.setState({ modalOpen: false });
    }

      
    handleOpenTwo = () => {
        this.setState({ modalTwoOpen: true });
    }

    handleCloseTwo = () => {
        this.setState({ modalTwoOpen: false });
    }

    render () {
        const products = this.props.user.products.map( prod => {
            return (
                <li key={prod.id}><Link onClick={this.handleOpenTwo}>{prod.title}:  NOT SOLD ${prod.price}                  </Link>
                <Modal style={{ width:"440px"}}
                open={this.state.modalTwoOpen}
                onClose={this.handleCloseTwo}
                closeIcon
                >
                <Modal.Content>
                <Card centered style={{ width:"440px"}}>
                <Card.Content>
                <Card.Header>{prod.title}: ${prod.price}</Card.Header>
                <Card.Description>{prod.description}<br></br><br></br>
                </Card.Description>
                </Card.Content>
                <img src={prod.image_url}></img><br></br>

                </Card>

                </Modal.Content>
                </Modal>


           
                <Button size="tiny" content="EDIT" onClick={this.handleOpen}></Button>
                <Modal style={{ width:"690px"}}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                <Modal.Content>
                    <EditProduct product={prod} handleClose={this.handleClose}/>
                </Modal.Content>
                </Modal>
                
                </li>
            )
        })
        return (
            <div>             
                {products}         
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}

export default connect(mapStateToProps)(UserProducts)