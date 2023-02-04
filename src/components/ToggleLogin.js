import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Button } from 'semantic-ui-react'

function ToggleLogin({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            {showLogin ? (
            <>
                <Login onLogin={onLogin} /><br></br>
                    <p>Don't have an account?</p><br></br>
                    <Button content="Signup" onClick={() => setShowLogin(false)}>
                    </Button>
            </>
            ) : (
            <>
                <Signup onLogin={onLogin} /><br></br>
                    <p>Already have an account?</p>
                    <Button content="Log In" onClick={() => setShowLogin(true)}>
                    </Button>
            </>
            )
        }
    </div>
    )
}

export default ToggleLogin