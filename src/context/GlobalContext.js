import React from 'react';

const GlobalContext =  React.createContext ({
  groceryList: [],
  editControlsHandler: () => {}
});
  
export default GlobalContext 
