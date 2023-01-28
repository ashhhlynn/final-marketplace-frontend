import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Button, Form } from 'semantic-ui-react'

function ToggleLogin({ onLogin }) {

const [showLogin, setShowLogin] = useState(true);

return (
<div class ="log">
      {showLogin ? (
        <>
          <Login onLogin={onLogin} />
          <p>
            Don't have an account?
            <button class ="showlog" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
           <Signup onLogin={onLogin} />
          <p>
            Already have an account? 
            <button class ="showlog" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default ToggleLogin;