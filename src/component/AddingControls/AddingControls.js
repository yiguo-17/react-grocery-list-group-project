import React, { Component, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'


function AddingControls({handler}) {
   
    const handleOnClick = (data) => {
       
        
        let  newData = [...data]

          

       newData.push( {
        name: nameInput,
        price: priceInput,
        imageLink: imageInput,
        description: descriptionInput
        
       })

      

       handler(newData)

       setNameInput('') 
       setPriceInput('') 
       setImageInput('') 
       setDescriptionInput('') 
       
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



    return (

        <div  >
 
         <GlobalContext.Consumer>
             {(data) => {
               return  (<div>
                
       <button onClick={ () => handleOnClick(data.groceryList)}  >Show Data</button>
       <input type='text' value={nameInput} onChange={handleNameInput} />
      <input type='text' value={priceInput} onChange={handlePriceInput} />
      <input type='text' value={imageInput} onChange={handleImageInput} />
      <input type='text' value={descriptionInput} onChange={handleDescriptionInput} />
                 </div>)
             }}
         </GlobalContext.Consumer>
 
        
        </div>
 
     

    )
}

export default AddingControls

