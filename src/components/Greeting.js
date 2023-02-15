import React from 'react'
import { Header} from 'semantic-ui-react'

const Greeting = () => {
    return (    
        <center>
            <Header size='large' color='black' font="courier new" style={{marginTop: '3%', marginBottom: '.5%'}}>
                <i>Handmade</i>
            </Header>
            <Header size='medium' color='black' style={{marginTop: '.5%', marginBottom: '3%'}}>
                <i> Shop and sell homegoods</i>
            </Header>
        </center>
    )
}

export default Greeting