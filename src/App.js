<<<<<<< HEAD
import React, { Component } from 'react';
=======
>>>>>>> fc50e14d67c4ede4aba5e355a2b9fbe45bcd1a64
import './App.css';
import AddingControls from "./component/AddingControls/AddingControls";
import EditControls from "./component/Edit Controls/EditControls";
import ItemDisplay from "./component/ItemDisplay/ItemDisplay";
import Search from "./component/Search/Search"

<<<<<<< HEAD
class App extends Component{
  state = {
    items:[
      {
        name:"apple",
        price:1,
        imageLink:"https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png",
        description:"One Apple"
      }
    ],
    templeName: "",
    templePrice: "",
    tempImageLink: "",
    tempDescription: ""
  }

  render(){
    return(
      <div className = "app">
        
      </div>
    )
  }
}
=======
import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = 
    
      [
        {
          name: 'Apples',
          price: '$5',
          imageLink: '',
          description: 'Bag of apples',

>>>>>>> fc50e14d67c4ede4aba5e355a2b9fbe45bcd1a64

        },
        {
          name: 'Oranges',
          price: '$4',
          imageLink: '',
          description: 'Bundle of oranges',
        },
      ]
  
  }
  


  render() {
    return (
      <div>
        
      </div>
    )
  }
}
