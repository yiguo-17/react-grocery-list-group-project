import React, { Component } from 'react';
import './App.css';
import AddingControls from "./component/AddingControls/AddingControls";
import EditControls from "./component/Edit Controls/EditControls";
import ItemDisplay from "./component/ItemDisplay/ItemDisplay";
import Search from "./component/Search/Search"

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

export default App;
