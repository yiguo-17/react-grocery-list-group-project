import React, { Component } from 'react'
import GlobalContext from "./context/GlobalContext";
import AddingControls from './component/AddingControls/AddingControls'
import ItemDisplay from './component/ItemDisplay/ItemDisplay';
import Search from './component/Search/Search'
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
        {
          name: 'Blueberry',
          price: '$6',
          imageLink: '',
          description: 'Bundle of blueberry',
        },
        {
          name: 'Strawberry',
          price: '$4',
          imageLink: '',
          description: 'Bundle of strawberry',
        },
        {
          name: 'Mongo',
          price: '$7',
          imageLink: '',
          description: 'Bundle of mongos',
        },
        {
          name: 'Banana',
          price: '$4',
          imageLink: '',
          description: 'Bundle of bananas',
        },
        {
          name: 'Watermelon',
          price: '$4',
          imageLink: '',
          description: 'A watermelon',
        },
        {
          name: 'Kiwis',
          price: '$8',
          imageLink: '',
          description: 'Bundle of kiwis',
        },
        {
          name: 'Blackberry',
          price: '$4',
          imageLink: '',
          description: 'Bundle of blackberries',
        },
        {
          name: 'plum',
          price: '$2',
          imageLink: '',
          description: 'Bundle of plums',
        },
        {
          name: 'Pears',
          price: '$4',
          imageLink: '',
          description: 'Bundle of Pears',
        },
        {
          name: 'Peaches',
          price: '$4',
          imageLink: '',
          description: 'Bundle of peaches',
        },
      ]
    }
   this.handler= (item) => {
      this.setState({
        groceryList: 
        item
   })
   }
   this.editControlsHandler = (item) =>{
      this.setState({
        groceryList:
        item 
      })
      //console.log(item);
   }

   this.newhandler = () => {
     console.log(this.state);
   }
}
  render() {

    return (
      <div>
        <GlobalContext.Provider value={{groceryList: this.state.groceryList, editControlsHandler: this.editControlsHandler}} >
        <AddingControls handler={(item) => this.handler(item)}  />
        <ItemDisplay editControlsHandler={(item) => {this.editControlsHandler(item)}}  /> 
        <Search />
        </GlobalContext.Provider>
      <button onClick={this.newhandler}>state check</button>
      </div>
    )
  }
}
