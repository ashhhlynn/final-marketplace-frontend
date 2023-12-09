import React  from "react"
import { Segment } from 'semantic-ui-react'

const Footer= () => {
    return (
        <Segment size="tiny" style={{marginTop: "0%", borderBox:"1", borderColor:"#f0f0f0",  background:"#fdfcf9", height:"60px"}}>
            <center> 
                <h5 style={{marginTop:"1%", color:"#26453e"}}> © 2023 Seedlink</h5>
            </center>
        </Segment>
    )
}

export default Footer