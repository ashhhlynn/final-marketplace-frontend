import React from 'react'
import { Header} from 'semantic-ui-react'

const Greeting = () => {
    return (
        <center>
            <Header size='large' color='teal' style={{marginTop: '3%', marginBottom: '.5%'}}>
                <i>Welcome to Handmade Market!</i>
            </Header>
            <Header size='medium' color='black' style={{marginTop: '.5%', marginBottom: '3%'}}>
                <i> Shop and sell handcrafted homegoods</i>
            </Header>
        </center>
    )
}

export default Greeting