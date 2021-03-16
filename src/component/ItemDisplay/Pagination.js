import React from 'react'

function Pagination({cardsPerPage, totalCards,paginate}) {
    const pageNumbers = [];
    for(let i =1; i<= Math.ceil(totalCards/cardsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(num=>(
                    <li key = {num} className = 'page-btn'>
                        <a onClick={()=>paginate(num)} href='!#' className = 'page-link'>
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination
