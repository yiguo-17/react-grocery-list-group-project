import React, { Component } from 'react'
import GlobalContext from "./context/GlobalContext";
import AddingControls from './component/AddingControls/AddingControls'



export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
    
      groceryList: [
        {
          name: 'Apples',
          price: '$5',
          imageLink: '',
          description: 'Bag of apples',
          


        },
        {
          name: 'Oranges',
          price: '$4',
          imageLink: '',
          description: 'Bundle of oranges',
        },
      ]
    }
    this.handler = () => {
      console.log(this.state);
    }

   

}



  render() {

     console.log(this.state);

    return (
      <div>
        <GlobalContext.Provider value={this.state.groceryList} >
        <AddingControls  />
        </GlobalContext.Provider>
   
        <button onClick={this.handler} >
          show
        </button>

      </div>
    )
  }
}
