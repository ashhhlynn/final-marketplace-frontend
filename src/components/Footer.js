import React  from "react"
import { Segment } from 'semantic-ui-react'

const Footer= () => {
    return (
        <Segment size="tiny" style={{ marginTop: "0%", border:"0", background:"#838F8D", height:"80px"}}>
            <center> 
                <h5 style={{marginTop:"2%", color:"#FFFFFF"}}> © 2023 Seedlink | Powered by Netlify</h5>
            </center>
        </Segment>
    )
}

export default Footer