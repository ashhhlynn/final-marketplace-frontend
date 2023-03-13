import { Icon, Card, Segment } from 'semantic-ui-react'

const AboutCard = () => {
    return (
        <Segment style={{marginTop: "2%", backgroundColor:"#DBE6E0"}}>
            <Card.Group  centered style={{color:"#26453e"}}>
                <Card style={{marginLeft:"2%", backgroundColor:"#DBE6E0", width:"290px"}}><br></br><br></br>
                    <center>
                        <Icon name="recycle" size="huge"></Icon>
                        <h2>Responsibly Sourced</h2>
                        <h4 >Sustainably grown by people who care.</h4><br></br><br></br>
                    </center>
                </Card>
                <Card style={{backgroundColor:"#DBE6E0", width:"290px"}}><br></br><br></br>
                    <center>
                        <Icon name="bicycle" size="huge"></Icon>
                        <h2 >Flat Delivery Fee</h2>
                        <h4 >Enjoy flat rate delivery fee of $10.00.</h4><br></br>
                    </center>
                </Card>
                <Card style={{width:"290px", backgroundColor:"#DBE6E0" }}><br></br><br></br>
                    <center>
                        <Icon name="globe" size="huge"></Icon>
                        <h2 >Rooted in Kindness</h2>
                        <h4>Kindness towards the people and planet.</h4><br></br>
                    </center>
                </Card>             
            </Card.Group>  
        </Segment>             
    )
}

export default AboutCard
