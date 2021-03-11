import React, { Component } from 'react'
import GlobalContext from "./GlobalContext";
export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {

      list: [],
    
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

}



  render() {


    return (
      <div>
    <GlobalContext.Provider value={this.state}>
      <GlobalContext />
    </GlobalContext.Provider>        {
}
      </div>
    )
  }
}
