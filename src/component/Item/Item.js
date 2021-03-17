import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types'; //acts as a middleware to sanitize prop passing
import {createUseStyles} from 'react-jss';
import GlobalContext from "../../context/GlobalContext";
import Modal from '../Search/Modal';

const useStyles = createUseStyles({
    add: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      },
      remove: {
        color: 'green',
        border: 'lightgrey solid 0.5px',
        fontSize: 12,
        position: 'absolute',
        top: 10,
        right: 10,
      },
      image: {
        fontSize: 80
      },
      wrapper: {
        border: 'lightgrey solid 1px',
        margin: 20,
        padding: 25,
        position: 'relative',
        textAlign: 'center',
        textTransform: 'capitalize',
        width: 200,
      }
});

export default function GroceryItem({ image, name, index, list}) {
  const css = useStyles();
  const [isOpen, setIsOpen] = useState(false);

    function handleRemove(e){
        e.preventDefault();
        const reducedArr = [...list];
        const test = reducedArr.splice(index, 1);
        console.log(reducedArr );
    } 

    const handleOnClick = (data) => { 
      let  newData = [...data]
      newData.push( {
      name: nameInput,
      price: priceInput,
      imageLink: imageInput,
      description: descriptionInput
      
     })
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
  //const [isOpen, setIsOpen] = useState(false);

  
  return(
      <GlobalContext.Consumer>
        {(data) => {
          return(
            <div className={css.wrapper}>
            <h3>
              {name}
            </h3>
            <button className={css.add}>
              <span className={css.image} role="img" aria-label={name}>
                  {image}
              </span>
            </button>
            <button className={css.button} onClick={ () => {
              
              
              const reducedArr = [...list];
              const test = reducedArr.splice(index, 1);
              console.log(list);
              data.editControlsHandler(reducedArr)              
              
              }}>
                X
          </button>

          <button onClick = {()=>setIsOpen(true)}>Edit</button>
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
      <button className={css.button} onClick={ () => {
 
              let nameVal = {nameInput}

              const obj = {
                name: nameVal.nameInput,
                price: '$7',
                imageLink: '',
                description: 'Bundle of mongos',
              }
              const replace = list.splice(index, 1, obj);
              data.editControlsHandler(list)              
              //console.log({replace})
              console.log(nameInput)

              }}>
                Save Edit
          </button>            
            
                </div>
                            </Modal>

        </div>
          )

        }}

    </GlobalContext.Consumer>

  )

}

//prop sanitizing
GroceryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  edit: PropTypes.func.isRequired,

}