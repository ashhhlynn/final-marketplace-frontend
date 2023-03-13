import { useState } from "react";
import UserProducts from './UserProducts'
import UserOrders from './UserOrders'
import Account from './Account'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Profile(props) {
  const [displayA, setDisplayA] = useState(true)
  const [displayB, setDisplayB] = useState(false)
  const [displayC, setDisplayC] = useState(false)

  const showA = () => {
    setDisplayA(true)
    setDisplayB(false)
    setDisplayC(false)
  }

  const showB = () => {
    setDisplayA(false)
    setDisplayB(true)
    setDisplayC(false)
  }

  const showC = () => {
    setDisplayA(false)
    setDisplayB(false)
    setDisplayC(true)
  }
  
  return (
    <div className="profileNav">    
      <Grid columns={2} stackable textAlign='left'>
        <Grid.Column style= {{width: "370px" }} >
          <Menu className="link-styles" vertical size="large"> 
              <h1 >Hi, {props.user.name}!</h1>
              <Link onClick={showA}><h4>User Information</h4></Link>
              <Link onClick={showB}><h4>Order History</h4></Link>
              <Link onClick={showC}><h4>Plant History</h4></Link>
          </Menu>         
        </Grid.Column>
        <Grid.Column style={{marginLeft:"8%", marginTop:"2%"}}> 
          {displayA && <div><Account/></div>}
          {displayB && <div><UserOrders user={props.user}/></div>}
          {displayC && <div><UserProducts user={props.user}/></div>}
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Profile