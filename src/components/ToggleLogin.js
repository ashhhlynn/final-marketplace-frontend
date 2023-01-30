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
          <center><p>
            Don't have an account?<br></br>
            <Button content="Signup" onClick={() => setShowLogin(false)}>
            </Button>
            </p>  </center>  
        </>
      ) : (
        <>
           <Signup onLogin={onLogin} /><br></br>
          <p><center>
            Already have an account? 
            <Button content="Log In" onClick={() => setShowLogin(true)}>
            </Button>
            </center>
          </p>
        </>
      )}
    </div>
  );
}

export default ToggleLogin;