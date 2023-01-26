import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFromCart} from './actions/cartActions'
import { Item, Button } from 'semantic-ui-react'

class CartItem extends Component {

    buttonClickHandler = (id) => {
        this.props.removeFromCart(id);
        alert("Removed from Cart")
    }

    render() {
        const i = this.props.item
    return (
<center>
            <Item.Group relaxed>
                    <Item>
                        <Item.Content>
                <img src={i.img_id} alt={i.name} className='itemimage'/>
               <Item.Header>{i.title}: ${i.price}</Item.Header>
                <p>{i.description}</p>
                <Button content="Remove" onClick={()=>{this.buttonClickHandler(i.id)}}></Button>
                </Item.Content>
                </Item>
                </Item.Group>
                </center>  
        )
    }
}


const mapStateToProps = (state)=>{
    return{
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id)=>{dispatch(removeFromCart(id))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)