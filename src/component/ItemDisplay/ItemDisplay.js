import React, { Component, useState } from 'react'
import {createUseStyles} from 'react-jss';
import GroceryItem from '../Item/Item';
import GlobalContext from '../../context/GlobalContext'
import Pagination from './Pagination';

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
    const [currentPage,setCurrentPage]= useState(1);
    const[cardsPerPage] = useState(10);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);
    


    return (

        <div  >
 
         <GlobalContext.Consumer>
          
             {(data) => {
               setGroceries(data.groceryList)
               console.log(groceries);
               const currentCards = groceries.slice(indexOfFirstCard,indexOfLastCard);
               
               return(
                <div className={css.wrapper}>
                  {
                    currentCards.map((item, index)=> (
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
         <Pagination
         cardsPerPage ={cardsPerPage}
         totalCards = {groceries.length}
         paginate = {paginate}/>
         
 
        
        </div>
 
     

    )
}

export default ItemDisplay