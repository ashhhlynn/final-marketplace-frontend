import React, { Component } from "react"
import { Item, Segment, Divider, Button, Card} from 'semantic-ui-react'
import { connect } from 'react-redux'
import Background from './Background'
import AboutCard from './AboutCard'
import { Link } from 'react-router-dom'
import { createOrder } from './actions/orderActions'
import Product from './products/Product'


class Home extends Component{

    handleCreateOrder = () => {
        if (this.props.user.length !== 0 && this.props.currentOrder.length === 0) {
            let userId = this.props.user.id
            this.props.createOrder(userId)
        }
        else if (this.props.user.length === 0){
            alert("Register or login to begin order.")
        }
    }

    render() {  
    
       
    
        return (
           <div className="home">
                <Background />  
                <center>
                    <Item className="homeHeader"> 
                        <h1><b>A Plant Marketplace</b></h1>
                        <h2><i>for the true plant lovers</i></h2>
                        <Button inverted circular as={Link} to ="/products" style={{ color:"#686868", background: "#DBE6E0"}} onClick={this.handleCreateOrder} size="huge">GET STARTED</Button>
                    </Item>    <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                    <br></br>  <br></br>  <br></br>
                </center>  
            
                  

                <Segment  style={{height:"504px",backgroundColor:"#fff0d8",marginTop: "0%"}}>
                <div className="aboutTwo">
                    <br></br><h1>welcome spring</h1>
                    <Divider></Divider>
                    <h3>Peonies are in full bloom! Kick off the new season by shopping everyone’s favorite fluffy flower.</h3>
                    <Button as={Link} to ="/products" style={{ color:"white",backgroundColor:"black", width:"180px"}} onClick={this.handleCreateOrder} size="huge">Shop Now</Button>
                    <img style={{marginTop: "-63%", marginBottom:"-2px",marginLeft:"107%", objectFit: "cover", objectPosition: "0% 0%"}}floated="left" width="740px" height="500px" 
                    src="https://media.urbanstems.com/image/upload/f_auto/w_850,q_80/Catalogs/urbanstems-master/Spring23/Peony%20Palette/Peony_Palette_Middle.jpg" alt="abttwo"/>
                </div> </Segment>

    
                <Segment style={{letterSpacing:"1px", lineHeight:"2",height:"275px", color:"white", backgroundColor:"#585858", marginTop: "2%"}}>
<center><br></br>
<p style={{ borderStyle: "dashed", padding:"26px", width:"fit-content"}}>
<h1 style={{fontSize:"38px", letterSpacing:".5px"}}><b>14-DAY GUARANTEE</b></h1><h3><i>We guarantee healthy plants on arrival. If plants arrive significantly<br></br> damaged*, we'll replace them up to 14 days after delivery.</i></h3>
</p></center>
                </Segment> 
         


                <Segment style={{backgroundColor:"inherit",border:"none",marginBottom: "0%", marginTop:"4%"}}>
                <img style={{marginTop: "0%", marginLeft:"3%",marginBottom: "-1%",  objectFit: "cover", objectPosition: "0% 25%"}}floated="left" width="710px" height="450px" src="https://i0.wp.com/www.redwinedragons.com/wp-content/uploads/2022/04/easy-care-best-beautiful-indoor-house-plants-decor.png?w=800&ssl=1" alt="about"/>
                



                <Item className="about" style={{marginRight:"-13%",}}>
                    <h1>about</h1>
                    <Divider></Divider>
                    <h3>
                        Seedlink is a buy and sell plant market with a mission to inspire green places by connecting people with plants. Sell your creations or enjoy healthy, happy plants delivered straight to your door.
                    </h3>
                </Item>
                </Segment> 
               

                <AboutCard/>  

               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        user: state.currentUser,
        currentOrder: state.currentOrder,
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
      createOrder: (userId) => { dispatch(createOrder(userId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
