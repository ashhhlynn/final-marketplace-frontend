import { Icon, Card, Segment } from 'semantic-ui-react'

const AboutCard = () => {
    return (
        <Segment style={{marginTop: "3%", backgroundColor:"#fdfcf9"}}>
        
            <Card.Group  centered style={{color:"#26453e"}}>
               
                <Card style={{marginLeft:"2%", backgroundColor:"#fdfcf9", width:"290px"}}><br></br><br></br>
                    <center>
                        <Icon name="recycle" size="huge"></Icon>
                        <h2>responsibly sourced</h2>
                        <h4 >Sustainably grown by people who care.</h4><br></br><br></br>
                    </center>
                </Card>
              
                <Card style={{width:"290px", backgroundColor:"#fdfcf9" }}><br></br><br></br>
                    <center>
                        <Icon name="globe" size="huge"></Icon>
                        <h2 >rooted in kindness</h2>
                        <h4>Kindness towards the people and planet.</h4><br></br>
                    </center>
                </Card>        
                <Card style={{backgroundColor:"#fdfcf9", width:"290px"}}><br></br><br></br>
                    <center>
                        <Icon name="credit card outline" size="huge"></Icon>
                        <h2 >flat delivery fee</h2>
                        <h4 >Enjoy flat rate delivery fee of $10.00.</h4><br></br>
                    </center>
                </Card>     
            </Card.Group>  
        </Segment>             
    )
}

export default AboutCard
