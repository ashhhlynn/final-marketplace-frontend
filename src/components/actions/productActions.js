export const fetchProducts= () => {
    return (dispatch) => {
      dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((products) => 
        dispatch({ type: "FETCH_PRODUCTS", products }));
    };
  }
  
  export const createProduct= (product) => {
    return (dispatch) => {
       dispatch({type: 'ADD_PRODUCT_REQUEST', loading: true})
       return fetch('http://localhost:3000/products', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
           'Authorization': localStorage.token
        },
       body: JSON.stringify({
           title: product.title,
           price: product.price,
           description: product.description,
           image_url: product.image_url
       })
       })
       .then(resp => resp.json())
       .then(data => {
           if(data.message){
               console.log(data.message)
           }
           else {
               dispatch({type: 'ADD_PRODUCTS', data})
           }           
       })
   }
}
