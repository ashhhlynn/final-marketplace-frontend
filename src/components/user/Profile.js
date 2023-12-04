import { useState } from "react"
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
      <img style={{objectFit: "cover", objectPosition: "50% 32%"}}  src="https://leafandclay.co/cdn/shop/collections/succulents-homepage-image_67aed5c3-86b9-4af3-955f-2c02dd129166.jpg?v=1655490570&width=1920" alt="cp" width="1263" height="270" loading="eager"/>          
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
}

export default Profile