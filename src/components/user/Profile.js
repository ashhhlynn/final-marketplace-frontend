import React, {Component} from 'react';
import {connect} from 'react-redux';
import AccountInfo from './AccountInfo'
import UserProducts from './UserProducts'
import UserOrders from './UserOrders'
import AccountNav from './AccountNav'
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
                    <center>
                    <Header as="h2">Your Account<Divider></Divider></Header>
                    <AccountInfo  />
                    <Header as="h3"><i>{this.props.user.orders.length} Orders and {this.props.user.products.length} Products</i></Header>
                    </center>
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