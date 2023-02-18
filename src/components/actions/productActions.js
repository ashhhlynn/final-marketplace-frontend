export const fetchProducts = () => {
    return (dispatch) => {
      dispatch({ type: "FETCH_PRODUCTS_REQUEST" })
      fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(products => {dispatch({ type: "FETCH_PRODUCTS", products })})
    }
}

export const createProduct = (product, user) => {
    return (dispatch) => {
        let i = user.id
        console.log(i)
        const token = localStorage.token;
        dispatch({type: 'ADD_PRODUCT_REQUEST'})
        return fetch('http://localhost:3000/products', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
           'Authorization':  `Bearer ${token}`
        },
       body: JSON.stringify({
           title: product.title,
           price: product.price,
           description: product.description,
           image_url: product.image_url,
           sold: false,
           buyer: i
       })
       })
       .then(resp => resp.json())
       .then(data => {
           if(data.message){
            window.alert(data.message)
        }
           else {
               dispatch({type: 'ADD_PRODUCT', data})
               window.alert('Product created')
           }           
       })
   }
}

export const editProduct = (product) => {
    return (dispatch) => {
        const token = localStorage.token;
        console.log(token)
        let id = product.id

        fetch(`http://localhost:3000/products/${id}`, {  
              
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                     Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                   title: product.title,
                   price: product.price,
                   description: product.description,
                   image_url: product.image_url
                })})
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                dispatch({type: "EDIT_PRODUCT", data, id})
                window.alert("Product updated")
            })
        }
    }

    export const deleteProduct = (id) => {
        return (dispatch) => {
            dispatch({type: "DELETE_PRODUCT", id})
            const token = localStorage.token;
            return fetch(`http://localhost:3000/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })   
        }           
    }
    