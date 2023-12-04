import Login from "./Login"
import Signup from "./Signup"
import { useNavigate } from 'react-router-dom'
import { Grid, Divider, Segment } from 'semantic-ui-react'

function SignupLogin() {

    const navigate = useNavigate()

    function handleRoute() {
        navigate('/')
    }

    return (
        <div className="toggleLogin">  
            <img alt="cp" width="1263" height="270"  style={{objectFit: "cover", objectPosition: "50% 12%"}} src="//cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=352 352w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=832 832w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1200 1200w, //cdn.shopify.com/s/files/1/1124/9666/collections/houseplant-hero_fe53daa1-822a-4988-945c-01415c17d114.jpg?v=1644596726&amp;width=1920 1920w"  loading="eager"/>
            <Segment style={{marginBottom:"1.2%", background:"inherit", boxShadow:"none", border:"none"}}>
                <Grid stackable relaxed='very' columns={2}>
                    <Grid.Column > 
                        <center><Login handleRoute={handleRoute}/></center>
                    </Grid.Column>                 
                    <Grid.Column>
                        <center><Signup handleRoute={handleRoute}/></center>
                    </Grid.Column>   
                </Grid>
                <Divider style={{fontWeight:"normal"}}vertical>Or</Divider>
            </Segment>
        </div>
    )
}

export default SignupLogin