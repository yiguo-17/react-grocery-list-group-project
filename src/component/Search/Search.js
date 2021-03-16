import React, { Component, useState } from 'react';
import GroceryItem from '../Item/Item';
import './Search.css'
import GlobalContext from '../../context/GlobalContext';
import Modal from './Modal';

function Search(){
    const [key, setKey] = useState('');
    const keyHandler = (event)=>{
        setKey(event.target.value)
    }
    const [isOpen, setIsOpen] = useState(false);
    const [groceries, setGroceries] = useState([]);
    return(
        <div className = "search">
            <GlobalContext.Consumer>
                {
                    (data)=>{
                        setGroceries(data.groceryList);
                        const result = groceries.filter(
                            thing=>thing.name.toLowerCase().includes(key.toLowerCase())
                        )
                        return(
                            <div>
                            <input type="text" placeholder="Key Word Here..." onChange={keyHandler}/>
                            <button onClick = {()=>setIsOpen(true)}>Search</button>
                            <Modal open = {isOpen} close = {()=>{setIsOpen(false)}}>
                            <div className='result'>
                  {
                    result.map((item, index)=> (
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
                            </Modal>
                        </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        </div>
    )
}
export default Search
