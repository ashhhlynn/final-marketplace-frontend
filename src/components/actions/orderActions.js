export const createOrder = (userId) => {
    console.log(userId)
    return (dispatch) => {
        const token = localStorage.token;
        return fetch('https://final-marketplace-api.onrender.com/orders', {
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

export const sendOrder = (orderId, total) => {
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
                window.alert("Thank you! Your order was submitted.")
                dispatch({ type: "SUBMIT_ORDER" }) 
            }
        })
    }    
}
