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
                if(data.message){
                    console.log(data.message)
                }
                else {
                    console.log(data)
                    dispatch({type: "CREATE_ORDER", data})
                }
            })
    }
}

export const sendOrder = () => {
    return (dispatch) => {
        dispatch({type: "SUBMIT_ORDER"})
    }
}
    






export const getPreviouusOrders = (id) => {
    return (dispatch) => {
        const token = localStorage.token;
        return fetch('http://localhost:3000/orders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        }
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else {
                console.log(data)
                const orderz = data.filter(order => order.user_id === id)
                const orders = orderz.filter(o => o.complete === true)
                dispatch({type: "USER_ORDERS", orders})
            }
        })
    }
}
    
export const sendyOrder = (total, orderId) => {
    return (dispatch) => {
        dispatch({type: "SUBMIT_ORDER_REQUEST", loading: true})

       return fetch('http://localhost:3000/orders/' + `${orderId}`, {
           method: 'PATCH',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json',
               'Authorization': localStorage.token
            },
           body: JSON.stringify({
               total: total,
               complete: 1
           })})
           .then(resp => resp.json())
           .then(data => {
               
                   dispatch({type: "SUBMIT_ORDER", data})
                })           
            }
     }
        