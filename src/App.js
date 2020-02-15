import React, { Component } from 'react';
import './App.css';
import GoodMatch from './components/GoodMatch'
import BadMatch from './components/BadMatch'
import { Button } from 'reactstrap'
export default class App extends Component{
  constructor(props){
    super(props)
    // The state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // The handleChange methods update userName and loveName as the user types
      tempKey: "",
      goodTempKey: "",
      badTempKey: "",
      userName: "",
      loveName: ""
    }
  }

  handleChangeUser = (e) => {
    // This method takes the input and saves the value in this.state.userName so we can use the input in our program
    // no need to modify this method
    this.setState({ userName: e.target.value })
  }

  handleChangeLove = (e) => {
    // This method takes the input and saves the value in this.state.loveName so we can use the input in our program
    // No need to modify this method
    this.setState({ loveName: e.target.value })
  }

  // Add a method here that utilizes information to your user by adding a key:value pair to the state object. This method should utilize the user inputs established in state.
  // logic

  compTest = () => {
      let userName = this.state.userName
      let loveName = this.state.loveName
      let userStr = userName.split("")
      let loveStr = loveName.split("")
      console.log(userStr, loveStr);
      // console.log(`${userName}`)
      // console.log(`${typeof userName}`)
      // console.log(
      //     parseInt(userName)
      // )
      // console.log(typeof parseInt(userName))
      let numbers = ["0","1", "2","3","4","5","6","7","8","9"]
      // inside our 'userName'
      let allNumbers_AsArray = userStr.filter ( chr => numbers.includes(chr) )
      let allNumbers_LvArray = loveStr.filter ( chr => numbers.includes(chr) )
      //console.log(allNumbers_AsArray.length > 0)
      // if (typeof userName === "number" || typeof this.state.loveName === "number" ) {
      if (allNumbers_AsArray.length > 0 || allNumbers_LvArray.length > 0  ){
        this.setState({ tempKey: "Must use names" })
      }
         else if (userStr.length === loveStr.length) {
          this.setState({ goodTempKey: 11 + "%" })
      }
         else {
         this.setState({ badTempKey: 0 + "%" })
      }

// split
// this.state.handleChangeUser
// this.state.handleChangeLove

// length



      // tempkey
  }

  render(){

    // Destructuring this.state so that you may just use the following variables throughout your code
    let {
        goodTempKey,
        badTempKey,
        tempKey,
        userName,
        loveName
        } = this.state

    return(
      <>

        <div id = "all">
          <h1 id = "title"> Love-O-Meter </h1>

          {/* User input field - every DOM event that happens in the input will call the handleChange methods and update state */}
          <input
            id = "userName"
            onChange = { this.handleChangeUser }
            value = { userName }
            placeholder = "Your name"
          />
          <span id = "plus"> + </span>
          <input
            id = "loveName"
            onChange = { this.handleChangeLove }
            value = { loveName }
            placeholder = "Your love's name"
          />
          <br/>

          <button
            id = "submitButton"
            type = "submit"
            onClick = { this.compTest }
          >
          Submit!
          </button>

          <p> Your compatibility percentage! </p>

          <textarea
            id = "compatibility"
            placeholder = "Check Your Love"
            value = { tempKey }
          />

          {/* Conditional rendering, based on the return value of calculatePercentage */}
          {/* Feel free to go in and change the values here to fall in line with your desired matching criteria */}
          { badTempKey &&
            <div>
              <BadMatch />
            </div>
          }

          { goodTempKey &&
            <div>
              <GoodMatch />
            </div>
          }

          {/* Go ahead and customize this info! */}
          <footer> Alejandro & Richie | LEARN Academy Alpha 2020 </footer>
        </div>

      </>
    )
  }
}
