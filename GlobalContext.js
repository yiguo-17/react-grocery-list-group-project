import React from 'react';

const GlobalContext =  React.createContext ({

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
  });
  
export default GlobalContext 
