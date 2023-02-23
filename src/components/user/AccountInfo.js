import React, { Component }from 'react';
import { List, Modal, Button} from 'semantic-ui-react'
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
                <List>
                Name: {this.props.user.name}<br></br>
                Email: {this.props.user.email}<br></br>
                Address: {this.props.user.address}<br></br>
                Member Since: {this.props.user.created_at.slice(6, -14)}
                </List>
                <Button size="medium" position="center" content="EDIT" onClick={this.handleOpen}>
                </Button>
                <Modal style={{ width:"690px"}}
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
