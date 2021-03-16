import React, { Component, useState } from 'react'
import {createUseStyles} from 'react-jss';
import GroceryItem from '../Item/Item';
import GlobalContext from '../../context/GlobalContext'

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: [10, 50],
    justifyContent: 'center',
  }
});


function ItemDisplay() {

  const css = useStyles();

    const [groceries, setGroceries] = useState([])


    return (

        <div  >
 
         <GlobalContext.Consumer>
          
             {(data) => {
               setGroceries(data.groceryList)
               console.log(groceries);
               return(
                <div className={css.wrapper}>
                  {
                    data.groceryList.map((item, index)=> (
                      <GroceryItem
                        key={item.name}
                        index={index}
                        image={item.imageLink}
                        name={item.name}
                        list={data.groceryList}
            
                     />
                    ))
                  }
            
            
                </div>
              )
            }}
         </GlobalContext.Consumer>
 
        
        </div>
 
     

    )
}

export default ItemDisplay