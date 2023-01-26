export const createOrder = (total, u) => {

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
                total: total,
                user_id: u,
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
                    dispatch({type: "CREATE_ORDER", order: data})
                }
            })
            }

}