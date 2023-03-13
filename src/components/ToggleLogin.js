import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import { Link } from 'react-router-dom'

function ToggleLogin({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className="toggleLogin">             
            {showLogin ? (
                <>
                <Login onLogin={onLogin}/><br></br>
                    <p>Don't have an account? 
                        <Link onClick={() => setShowLogin(false)}> Register</Link>
                    </p>
                </>
                ) : (
                <>
                <Signup onLogin={onLogin}/><br></br>
                    <p>Already have an account? 
                        <Link onClick={() => setShowLogin(true)}> Login</Link>
                    </p>
                </>
                )
            }    
        </div>
    )
}

export default ToggleLogin