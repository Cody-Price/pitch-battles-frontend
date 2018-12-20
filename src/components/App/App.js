import React, { Component } from "react";

// import Game from "../Game/Game";
import Landing from "../Landing/Landing";

import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: undefined
		}
	}

	signUpUser = async (e, body) => {
		console.log(body)
	   const response = await fetch('https://pitch-battles-api.herokuapp.com/api/v1/users', {
	   		body: JSON.stringify(body),
	   		method: 'POST',
	   		mode: 'cors',
	   		headers: {
	   			'Content-Type': 'application/json; charset-uts-8'
	   		}
	   })


	   const parseReponse = await response.json()
	   // console.log(parseReponse)

  	}

  render() {
    return (
      <div className="App">
        <Landing signUpUser={this.signUpUser}/> 
//         <Game instrument="flute" />

      </div>
    );
  }
}

export default App;
