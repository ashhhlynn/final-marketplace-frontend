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
      <img style={{objectFit: "cover", objectPosition: "50% 12%"}}  src="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=352 352w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=832 832w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1920 1920w" alt="cp" width="1263" height="270" loading="eager"/>          
      <Grid columns={2} stackable textAlign='left'>
        <Grid.Column style= {{width: "370px" }} >
          <Menu className="link-styles" vertical size="large"> 
              <h1><i>Hi, {props.user.name}!</i></h1>
              <Link onClick={showA}><h4>user settings</h4></Link>
              <Link onClick={showB}><h4>order history</h4></Link>
              <Link onClick={showC}><h4>plant history</h4></Link>
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