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

    const handleOnClick = (data) => {
        console.log(data);
        let  newData =
           {
            name: nameInput,
            price: priceInput,
            imageLink: imageInput,
            description: descriptionInput
            
           }

       data.push(newData)

       
    }    

    const handleNameInput = (event) => {
        setNameInput(event.target.value)
        console.log(nameInput);
    }
    const handlePriceInput = (event) => {
        setPriceInput(event.target.value)
    }
    const handleImageInput = (event) => {
        setImageInput(event.target.value)
    }
    const handleDescriptionInput = (event) => {
        setDescriptionInput(event.target.value)
    }
    const [nameInput, setNameInput] = useState('')
    const [priceInput, setPriceInput] = useState('')    
    const [imageInput, setImageInput] = useState('')
    const [descriptionInput, setDescriptionInput] = useState('')
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
                        list={item.name}
            
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