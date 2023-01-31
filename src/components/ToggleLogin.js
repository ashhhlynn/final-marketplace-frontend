import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Button } from 'semantic-ui-react'

function ToggleLogin({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className ="log">
            {showLogin ? (
            <>
            <Login onLogin={onLogin} /><br></br>
                <center>
                    <p>Don't have an account?<br></br></p>
                    <Button content="Signup" onClick={() => setShowLogin(false)}>
                    </Button>
                </center>  
            </>
            ) : (
            <>
           <Signup onLogin={onLogin} /><br></br>
                <center>
                    <p>Already have an account?</p>
                    <Button content="Log In" onClick={() => setShowLogin(true)}>
                    </Button>
                </center>
            </>
            )
        }
    </div>
    )
}

export default ToggleLogin