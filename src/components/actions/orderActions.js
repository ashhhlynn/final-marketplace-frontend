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
                if(data.message) {
                    window.alert(data.message)
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


