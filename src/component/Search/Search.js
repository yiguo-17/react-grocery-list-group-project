import React from 'react';
import {useState} from 'react';
function Search(){
    const [searchTerm, setSearchTerm]= useState('');
    searchTermHandler = (event)=>{
        setSearchTerm(event.target.value)
    }
    match = (data,key)=>{
        data.name.toLowerCase().includes(key.toLowerCase())
    }
    return(
        <div className = "search">
            <GlobalContext.Consumer>
                {(list)=>{
                    return(
                        <div>
                            <input type="text" placeholder="Key Word Here..." onChange={searchTermHandler}/>
                            <button onClick = {match(list,searchTerm)}>Search</button>
                        </div>
                    )
                }}
            </GlobalContext.Consumer>
        </div>
    )
}