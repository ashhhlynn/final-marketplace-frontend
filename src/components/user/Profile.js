import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from '../reducers/AccountInfo'
import UserProducts from './UserProducts'
import UserOrders from './UserOrders'
import AccountNav from './AccountNav'
import EditUser from './EditUser'
import { Statistic, Item, Card, Divider, Icon, Header, Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Profile extends Component {

    render() {               
        return (
           <div>    
                <Grid columns={2} stackable textAlign='left'>
                    <Grid.Column style= {{width : "370px" }} >
                        <AccountNav/>
                    </Grid.Column>
                    <Grid.Column style={{marginLeft:"8%", marginTop:"2%"}}> 
                  
                    <Header as="h2">Your Account<Divider></Divider></Header>
                    <EditUser />
                  
                    
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

export default connect(mapStateToProps)(Profile)