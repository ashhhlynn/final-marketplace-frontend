import { useNavigate } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import Login from "./Login";
import Signup from "./Signup";

const SignupLogin = () => {

    const navigate = useNavigate();

    const handleRoute = () => {
        navigate('/')
    };

    return (
        <div className="toggleLogin">  
            <br></br><br></br>
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
    );
};

export default SignupLogin;