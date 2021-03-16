import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types'; //acts as a middleware to sanitize prop passing
import {createUseStyles} from 'react-jss';

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
  //const [groceryList, setList] = useState(...list)

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
    <div className={css.wrapper}>
        <h3>
          {name}
        </h3>
        <button className={css.add}>
          <span className={css.image} role="img" aria-label={name}>
              {image}
          </span>
        </button>
        <button className={css.remove} type="button" onClick={handleRemove}>
            X
      </button>
    </div>
  )
}

//prop sanitizing
GroceryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,

}