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
            <img alt="cp" width="1263" height="270"  style={{objectFit: "cover", objectPosition: "90% 22%"}} src="https://leafandclay.co/cdn/shop/collections/pastel-hero-2.jpg?v=1654487576&width=1920"/>
            <Segment style={{marginBottom:"1.2%", background:"inherit", boxShadow:"none", border:"none"}}>
                <Grid stackable relaxed='very' columns={2}>
                    <Grid.Column > 
                        <center><Login handleRoute={handleRoute}/></center>
                    </Grid.Column>                 
                    <Grid.Column>
                        <center><Signup handleRoute={handleRoute}/></center>
                    </Grid.Column>   
                </Grid>
                <Divider vertical>Or</Divider>
            </Segment>
        </div>
    )
}

export default SignupLogin