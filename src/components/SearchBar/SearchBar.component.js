import React from 'react'

export default function SearchBar({ placeholder, handleChange }) {
    return (
        <div>
           <input 
               className = 'search'
               type='search'
               placeholder={ placeholder }
               onChange={ handleChange }
           />
        </div>
    )
}
