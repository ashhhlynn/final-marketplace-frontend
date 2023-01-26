export const addToCart = (i, id, title, price) => {
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
           cart_id: 1
       })
       })
       .then(resp => resp.json())
       .then(data => {
        console.log(data)
           if(data.message){
               console.log(data.message)
           }
           else {
               dispatch({type: "ADD_TO_CART", data, i})
           }               
       })
   }
}