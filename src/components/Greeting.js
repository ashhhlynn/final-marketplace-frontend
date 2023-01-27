import React from 'react'
import { Header} from 'semantic-ui-react'

const Greeting = () => {
    return (
        <div className="container">   
            <center>
            <Header size='huge' color='grey' style={{marginTop: '2%'}}>
                Welcome to Marketplace Crafts
            </Header>
            <Header.Subheader size='huge' color='black' style={{marginBottom: '2%'}}>
                Shop crafted homegoods by independent sellers or sell your own!
            </Header.Subheader>
            </center>
      </div>
    )
}

export default Greeting