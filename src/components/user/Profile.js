import { useState } from "react";
import UserProducts from './UserProducts'
import UserOrders from './UserOrders'
import Account from './Account'
import { Header, Grid, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Profile(props) {
  const [displayA, setDisplayA] = useState(true);
  const [displayB, setDisplayB] = useState(false);
  const [displayC, setDisplayC] = useState(false);

  const showA = () => {
    setDisplayA(true);
    setDisplayB(false);
    setDisplayC(false);
  }
  const showB = () => {
    setDisplayA(false);
    setDisplayB(true);
    setDisplayC(false);
  };
  const showC = () => {
    setDisplayA(false);
    setDisplayB(false);
    setDisplayC(true);
  };
  
    return (
        <div>    
        <Grid columns={2} stackable textAlign='left'>
            <Grid.Column style= {{width : "370px" }} >
            <Menu style={{textAlign:"center", color:"#f3f3f2", height:"590px", background: "#f3f3f2"}} placeholder vertical size="big"><br></br>
                   <h1 style={{fontWeight:"normal", color:"black"}}>Hi, {props.user.name}</h1><br></br>
                   <Menu.Item size="huge"
                        onClick={showA}> 
                        <Link style={{ fontWeight:"normal", color: "#26453e"}}><h3 style={{ fontWeight:"normal"}}>account info</h3></Link>
                    </Menu.Item>
                   <Menu.Item
                        onClick={showB}>
                        <Link style={{  color: "#26453e"}}><h3 style={{ fontWeight:"normal"}}>order history</h3></Link>  
                    </Menu.Item>
                    <Menu.Item
                        onClick={showC}>
                    <Link style={{  color: "#26453e"}}><h3 style={{ fontWeight:"normal"}}>your plants</h3> </Link>
                    </Menu.Item>
                   <Menu.Item></Menu.Item>
                </Menu>         
            </Grid.Column>
            <Grid.Column style={{marginLeft:"8%", marginTop:"2%"}}> 
            {displayA && <div><Account/></div>}
          {displayB && <div><UserOrders/></div>}
          {displayC && <div><UserProducts/></div>}
            </Grid.Column>
        </Grid>
    </div>
)
  };



export default Profile