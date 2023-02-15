import React, {Component} from 'react'
import { Card, Image, Button} from 'semantic-ui-react'
import { connect } from "react-redux"
import { addToCart } from './actions/cartActions'

class Product extends Component {

    render() {
        const i = this.props.product
        return (
            <Card centered key={i.id} style={{ width:"350px"}}>
                <Image src={i.image_url}/>
                <Card.Content>
                    <Card.Header>{i.title} <Button content="+" floated="right" size="tiny" onClick={() => {this.handleClick(i)}}></Button> 
                    </Card.Header>
                    <Card.Description>{i.description}</Card.Description>
                    ${i.price}

                </Card.Content>
              
            </Card>
        )
    }

    handleClick = (product) => {
        this.props.addToCart(product, this.props.currentOrder)
    }    

}
  
const mapStateToProps = (state) => {
    return { currentOrder: state.currentOrder }
}

const mapDispatchToProps = (dispatch) => {
    return { addToCart: (product, order) => { dispatch(addToCart(product, order)) } }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Product)