import React, { Component } from "react";

class Home extends Component{

        componentDidMount () {
             return fetch("http://localhost:3000/products")
                .then((response) => response.json())
                .then((products) => 
                console.log(products));
            };
        
render(){

    return(
        <div className="hi">
           <p>Hi</p>
        </div>
    )
}

}

export default Home