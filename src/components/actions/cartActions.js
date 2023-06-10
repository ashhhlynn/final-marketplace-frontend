export const addToCart = (product, order) => {
    return (dispatch) => {
       const token = localStorage.token;
       return fetch('https://final-marketplace-api.onrender.com/order_items', {
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
           title: product.title,
           seller: product.user_id
       })
       })
       .then(resp => resp.json())
       .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
           else {
               dispatch({ type: "ADD_TO_CART", product, data })
               window.alert("Item added to basket.")
           }               
       })
    }
}

export const removeFromCart = (pid, id) => {
    return (dispatch) => {
        dispatch({type: "REMOVE_FROM_CART", pid, id})
        const token = localStorage.token;
        return fetch('https://final-marketplace-api.onrender.com/order_items/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })   
    }           
}
