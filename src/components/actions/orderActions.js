export const createOrder = (userId) => {
    return (dispatch) => {
        const token = localStorage.token;
        return fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                total: 0,
                user_id: userId,
                complete: 0
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
            else {
                console.log(data)
                dispatch({ type: "CREATE_ORDER", data })
            }
        })
    }
}

export const sendOrder = (orderId, cart, user, total) => {
    return (dispatch) => {
        const token = localStorage.token;
        fetch(`http://localhost:3000/orders/${orderId}`, {    
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                 Accept: 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                total: total,
                complete: 1
            })})
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
            else {
                window.alert("Your order was submitted!")
                let oi = data.order_items.map(o => o.product_id)
                for (let i = 0; i < (oi.length + 1); i++) {
                    fetch(`http://localhost:3000/products/${cart[i].id}`, {  
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                        sold: 1,
                        buyer: user.id,
                    })})
                .then(resp => resp.json())
                    dispatch({ type: "SUBMIT_ORDER" }) 
                }
 
            }
        })
    }    
}
