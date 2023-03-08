import React, {Component} from 'react'
import { Card, Image, Button, Header, Reveal} from 'semantic-ui-react'
import { connect } from "react-redux"
import { addToCart } from '../actions/cartActions'

class Product extends Component {

    render() {
        const i = this.props.product
        return (
            <Card key={i.id} style={{  background:"#fdfcf9"}}>
               <Card.Content><Reveal animated='move'>
                <Reveal.Content visible>  
                    <Image position="center" src={i.image_url}/>
                    <Header floated="right" style={{marginTop:"2.5%"}}><h4>${i.price.toFixed(2)}</h4></Header>
                    <Card.Header as="h3" style={{marginTop:"2%"}}>{i.title}</Card.Header>  
                    <Card.Meta style={{marginTop:"-4%"}}><i>by user {i.user_id}</i></Card.Meta> 
                </Reveal.Content>
                <Reveal.Content style={{backgroundColor:"#F0f0f0", height:"200px"}} hidden>
                    <center><br></br><i>{i.description}</i> <br></br> <br></br> 
                    <Button style={{color:"#FFFFFF", backgroundColor:"#26453e", width:"150px"}} onClick={(event) => {this.handleClick(event, i)}}>  
                        Add to Cart
                    </Button>
                    <br></br></center>
                </Reveal.Content>
                </Reveal></Card.Content>
            </Card>
        )      
    }

    handleClick = (event, product) => {
        event.preventDefault()
        if (this.props.cart.find((p) => p.id == product.id)){
            alert("You have already added this item.")
        }
        else {
            this.props.addToCart(product, this.props.currentOrder)
        }
    }    

}
  
const mapStateToProps = (state) => {
    return { 
        currentOrder: state.currentOrder,
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, order) => { dispatch(addToCart(product, order)) },
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Product)