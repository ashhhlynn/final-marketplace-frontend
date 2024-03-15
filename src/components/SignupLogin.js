import Login from "./Login"
import Signup from "./Signup"
import { useNavigate } from 'react-router-dom'
import { Grid, Segment } from 'semantic-ui-react'

function SignupLogin() {

    const navigate = useNavigate()

    function handleRoute() {
        navigate('/')
    }

    return (
        <div className="toggleLogin">  
            <img style={{marginBottom:"1.5%", objectFit: "cover", objectPosition: "0% 50%", width: "1263px", height: "270px"}} src="https://cdn.shopify.com/s/files/1/0019/8361/0978/collections/plants1_2000x.jpg?v=1673559695" alt="succulent"/>
            <br></br>
            <Segment style={{marginRight:"8%", marginLeft:"8%", marginBottom:"1.2%", background:"inherit", boxShadow:"none", border:"none"}}>
                <Grid stackable relaxed='very' columns={2}>
                    <Grid.Column > 
                        <center><Login handleRoute={handleRoute}/></center>
                    </Grid.Column>                 
                    <Grid.Column>
                        <center><Signup handleRoute={handleRoute}/></center>
                    </Grid.Column>   
                </Grid>
            </Segment>
            <br></br>
        </div>
    )
}

export default SignupLogin