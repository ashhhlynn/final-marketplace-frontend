import { Icon, Card, Segment } from 'semantic-ui-react'

const AboutCard = () => {
    return (
        <Segment className="aboutCard" style={{backgroundColor:"#fdfcf9"}}>       
            <Card.Group centered >
                <Card>
                    <center>
                        <Icon name="recycle" size="huge"></Icon>
                        <h2>Responsibly Sourced</h2>
                        <h4 >Sustainably grown by people who care.</h4>
                    </center>
                </Card>
                <Card >
                    <center>
                        <Icon name="globe" size="huge"></Icon>
                        <h2 >Rooted in Kindness</h2>
                        <h4>Kindness towards the people and planet.</h4>
                </center>
                </Card>        
                <Card>
                    <center>
                        <Icon name="credit card outline" size="huge"></Icon>
                        <h2>Flat Delivery Fee</h2>
                        <h4 >Enjoy flat rate delivery fee of $10.00.</h4>
                    </center>
                </Card> 
            </Card.Group>     
        </Segment>             
    )
}

export default AboutCard
