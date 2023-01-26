export const addToCart = (product, id, price, o) => {
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
           price: price,
           product_id: id,
           order_id: o
       })
       })
       .then(resp => resp.json())
       .then(data => {
        console.log(data)
           if(data.message){
               console.log(data.message)
           }
           else {
               dispatch({type: "ADD_TO_CART", data, product})
           }               
       })
   }
}

export const removeFromCart = (id) => {
    return (dispatch) => {
        dispatch({type: "REMOVE_FROM_CART", id})
        const token = localStorage.token;
        return fetch('http://localhost:3000/order_items/' + `${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            }})   
       }           
            }
