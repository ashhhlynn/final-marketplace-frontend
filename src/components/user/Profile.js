import { useState } from "react";
import { Grid, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import UserProducts from './UserProducts';
import UserOrders from './UserOrders';
import Account from './Account';

const Profile = (props) => {
  
  const [displayA, setDisplayA] = useState(true);
  const [displayB, setDisplayB] = useState(false);
  const [displayC, setDisplayC] = useState(false);

  const showA = () => {
    setDisplayA(true)
    setDisplayB(false)
    setDisplayC(false)
  };

  const showB = () => {
    setDisplayA(false)
    setDisplayB(true)
    setDisplayC(false)
  };

  const showC = () => {
    setDisplayA(false)
    setDisplayB(false)
    setDisplayC(true)
  };
  
  return (
    <div className="profileNav">    
      <Grid columns={2} stackable textAlign='left'>
        <Grid.Column style={{width: "370px"}} >
          <Menu className="link-styles" vertical size="large"> 
              <h1><i>Hi, {props.user.name}!</i></h1>
              <Link onClick={showA}><h4>your account</h4></Link>
              <Link onClick={showB}><h4>order history</h4></Link>
              <Link onClick={showC}><h4>plant creations</h4></Link>
          </Menu>         
        </Grid.Column>
        <Grid.Column style={{marginLeft:"6.5%", marginTop:"2%"}}> 
          {displayA && <div><Account/></div>}
          {displayB && <div><UserOrders user={props.user}/></div>}
          {displayC && <div><UserProducts user={props.user}/></div>}
        </Grid.Column>
      </Grid>
    </div>
  )
};

export default Profile;