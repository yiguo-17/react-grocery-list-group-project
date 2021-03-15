import React, { Component } from 'react'
import GlobalContext from "./context/GlobalContext";
import AddingControls from './component/AddingControls/AddingControls'
import ItemDisplay from './component/ItemDisplay/ItemDisplay';



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
   

   this.handler= (item) => {
     
   this.setState({
     groceryList: 
     item
   })

   }


   this.newhandler = () => {
     console.log(this.state);
   }


}



  render() {

     

    return (
      <div>
        <GlobalContext.Provider value={{groceryList: this.state.groceryList}} >
        <AddingControls handler={(item) => this.handler(item)}  />
        {/* <ItemDisplay /> */}
        </GlobalContext.Provider>
      <button onClick={this.newhandler}>state check</button>
     
        

      </div>
    )
  }
}
