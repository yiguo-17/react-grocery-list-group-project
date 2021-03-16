import React, { Component, useState } from 'react'
import {createUseStyles} from 'react-jss';
import GlobalContext from '../../context/GlobalContext'
import Modal from '../Search/Modal'

const useStyles = createUseStyles({
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: [10, 50],
      justifyContent: 'center',
    },
    button: {
        color: 'green',
        border: 'lightgrey solid 0.5px',
        fontSize: 12,
      },
    input: {
        border: 'lightgrey solid 0.5px',
      },
  });

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
    const [descriptionInput, setDescriptionInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const css = useStyles();

    return (

        <div  >
 
         <GlobalContext.Consumer>
             {(data) => {
               return  (<div className={css.wrapper}>
       <button className="add-btn" onClick = {()=>setIsOpen(true)}>+</button>
       <Modal open = {isOpen} close = {()=>{setIsOpen(false)}}>
                            <div className='form'>
                            <label>Name: </label>
       <input className={css.input} type='text' value={nameInput} onChange={handleNameInput} />
       <br></br>
       <label>Price: </label>
      <input className={css.input} type='text' value={priceInput} onChange={handlePriceInput} />
      <br></br>
      <label>Img Link: </label>
      <input className={css.input} type='text' value={imageInput} onChange={handleImageInput} />
      <br></br>
      <label>Description: </label>
      <input className={css.input} type='text' value={descriptionInput} onChange={handleDescriptionInput} />
      <br></br>
      <button className={css.button} onClick={ () => handleOnClick(data.groceryList)}>Submit</button>
            
            
                </div>
                            </Modal>
      
                 </div>)
             }}
         </GlobalContext.Consumer>
 
        
        </div>
 
     

    )
}

export default AddingControls

