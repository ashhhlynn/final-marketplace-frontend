import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import UserProducts from './UserProducts'
import UserOrders from './UserOrders'
import { Segment, Divider, Header, Grid } from 'semantic-ui-react'

class Profile extends Component {

    render() {               
        return (
           <div>
            <Segment>
               <center><h2><i>Hi {this.props.user.name}!</i></h2></center>
                <Divider></Divider>
                <Grid columns={3} stackable textAlign='left'>
                <Grid.Column>
                    <Header>Account Information: </Header>
                    <AccountInfo  />                 
                </Grid.Column>
                <Grid.Column>
                    <Header>Order History</Header>
                    <UserOrders user={this.props.user} key={this.props.user.id}/>
                </Grid.Column>    
                <Grid.Column>
                    <Header>Your Products</Header>
                    <h5>Active:</h5>
                        <UserProducts user={this.props.user} />
                    <h5>Sold:</h5>
                </Grid.Column>
                </Grid>
            </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
    }
}

export default connect(mapStateToProps)(Profile)