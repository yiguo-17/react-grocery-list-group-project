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

export default function GroceryItem({ image, name, index, list, nameInput, handleNameInput, priceInput, handlePriceInput, imageInput, handleImageInput, descriptionInput, handleDescriptionInput, handleOnClick}) {
  const css = useStyles();
  const [isOpen, setIsOpen] = useState(false);

    function handleRemove(e){
        e.preventDefault();

        const reducedArr = [...list];

        const test = reducedArr.splice(index, 1);
    
        //setState({groceryList: reducedArr})

        //console.log(list[index]);
    //    setList([])
        console.log(reducedArr );
    } 
  
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
      <button className={css.button} onClick={ () => handleOnClick(data.groceryList)}>Submit</button>
            
            
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