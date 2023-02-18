import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Button, Segment } from 'semantic-ui-react'

function ToggleLogin({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            <center><br></br>
            <Segment placeholder style={{ width:"600px", positionAlign:"center"}}>
            {showLogin ? (
            <>
                <Login onLogin={onLogin} /><br></br>
                    <p>Don't have an account?</p>
                    <Button size="tiny" content="REGISTER" onClick={() => setShowLogin(false)}>
                    </Button>
            </>
            ) : (
            <>
                <Signup onLogin={onLogin} /><br></br>
                    <p>Already have an account?</p>
                    <Button content="LOGIN" size="tiny" onClick={() => setShowLogin(true)}>
                    </Button>
            </>
            )
        }
        </Segment>
        </center>
        </div>
    )
}

export default ToggleLogin