export const createUser = (userData) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            user: userData
        })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
            else {
                localStorage.token = data.jwt;
                dispatch({ type: "SET_CURRENT_USER", user: data.user })
            }
        })
    }
}

export const getExistingUser = (userData) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user: userData,
        })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                window.alert(data.message)
            }
            else {
                localStorage.token = data.jwt;
                dispatch({ type: "SET_CURRENT_USER", user: data.user })
                console.log(data)
            }
        })
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" })
    }
}

export const checkUser = () => {
    return (dispatch) => {
        const token = localStorage.token;
        console.log(token)
        return fetch('http://[::1]:3000/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                localStorage.removeItem("token")
            }
            else {
                dispatch({ type: "SET_CURRENT_USER", user: data.user })
                console.log(data)
            }            
        })
    }
}

export const editUser = (users) => {
    return (dispatch) => {
        const token = localStorage.token;
        console.log(token)
        let id = users.id
        fetch(`http://localhost:3000/users/${id}`, {  
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                     Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                   name: users.name,
                   address: users.address,
                   city: users.city,
                   state: users.state,
                   zip: users.zip
                })
            })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            window.alert("Thank you! Your account was updated.")
            dispatch({ type: "SET_CURRENT_USER", user: data.user })
        })
    }
}