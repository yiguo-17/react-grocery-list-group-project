import './App.css';

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
