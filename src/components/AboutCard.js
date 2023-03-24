import { Icon, Card, Segment } from 'semantic-ui-react'

const AboutCard = () => {
    return (       
        <Segment className="aboutCard" style={{backgroundColor:"#838F8D", marginTop:"13%", marginBottom:"-1%", border:"0"}}> 
            <br></br><Card.Group centered >
                <Card>
                    <center><br></br><br></br>
                        <Icon name="recycle" size="huge"></Icon>
                        <h2>Responsibly Sourced</h2>
                        <h4 >Sustainably grown by people who care.</h4>
                    </center>
                </Card>
                <Card >
                    <center><br></br><br></br>
                        <Icon name="globe" size="huge"></Icon>
                        <h2 >Rooted in Kindness</h2>
                        <h4>Kindness towards the people and planet.</h4>
                </center>
                </Card>        
                <Card>
                    <center><br></br><br></br>
                        <Icon name="credit card " size="huge"></Icon>
                        <h2>Flat Delivery Fee</h2>
                        <h4 >Enjoy flat rate delivery fee of $10.00.</h4>
                    </center>
                </Card> 
            </Card.Group>     
       </Segment>           
    )
}

export default AboutCard
