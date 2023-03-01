import React, { Component }from 'react';
import { List, Modal, Button, Header} from 'semantic-ui-react'
import EditUser from './EditUser'
import {connect} from 'react-redux';

class AccountInfo extends Component {

    state = {
        modalOpen: false
    }
  
    handleOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleClose = () => {
        this.setState({ modalOpen: false })
    }

    render() {
        return(
            <div>
                <Header as="h3"><i>Account Information</i></Header>
                <List style={{textAlign:"center", fontFamily:"TimesNow-ExtraLight", fontSize:"16px"}}>
                Name: {this.props.user.name} <br></br>
                Email: {this.props.user.email}<br></br>
                Street: {this.props.user.address}<br></br>
                City: Chicago, IL<br></br>
                Zip: 66606<br></br>
                Member Since: {this.props.user.created_at.slice(6, -14)}
                </List>
                <Button size="mini" circular style={{width:"210px", marginTop:"-1.5%"}} onClick={this.handleOpen}>
                    Edit 
                </Button>
                <Modal style={{ display: "inline-block", width: "600px"}}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                closeIcon
                >
                    <Modal.Content>
                        <EditUser handleClose={this.handleClose} />
                    </Modal.Content>
               </Modal>
            </div>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}

export default connect(mapStateToProps)(AccountInfo)
