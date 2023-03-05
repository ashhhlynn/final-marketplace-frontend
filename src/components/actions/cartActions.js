export const addToCart = (product, order) => {
    return (dispatch) => {
       const token = localStorage.token;
       return fetch('http://localhost:3000/order_items', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
           'Authorization': `Bearer ${token}`
       },
       body: JSON.stringify({
           price: product.price,
           product_id: product.id,
           order_id: order, 
           title: product.title
       })
       })
       .then(resp => resp.json())
       .then(data => {
            console.log(data)
            if (data.message) {
                alert(data.message)
            }
           else {
               dispatch({type: "ADD_TO_CART", product})
               window.alert("This item was added to your cart!")
           }               
       })
    }
}

export const removeFromCart = (id) => {
    return (dispatch) => {
        dispatch({type: "REMOVE_FROM_CART", id})
        const token = localStorage.token;
        return fetch(`http://localhost:3000/order_items/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })   
    }           
}
