import React, { Component } from 'react'
import ItemDisplay from "../ItemDisplay/ItemDisplay"

class Search extends Component {
    matchKey = (item,props)=>{
        return(item.name.toLowerCase().includes(props.tempSearch.toLowerCase()))
    }
    render() {
        return (
            <div>
                <input type = "text" placeholder = "Search..."/>
                props.tempSearch === ""?<ItemDisplay/>:props.items.filter(matchKey)!==""?<ItemDisplay/>:<h1>No Match</h1>
                
            </div>
        )
    }
}

export default Search;
