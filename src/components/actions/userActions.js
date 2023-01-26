export const createUser = (userData) => {
    return (dispatch) => {
        return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            user: userData
        })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                window.alert(data.error)
            }
            else {
                dispatch({type: "SET_CURRENT_USER", currentUser: data})
            }
        })
    }
  }

  export const getExistingUser = (event, userData) => {
    event.preventDefault();
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
            if(data.message){
                window.alert(data.message)
            }
            else {
                dispatch({type: "SET_CURRENT_USER", currentUser: data})
                console.log(data)
            }
        })
       
    }



  }