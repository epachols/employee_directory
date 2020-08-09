import React from 'react'

const style ={
    fontSize: "24px",
    fontWeight: "bolder"
}

export default function SortRow({ handleSort }) {
    return (
        <tr style={style}>
            <td>Picture</td>
            <td><a href="#" onClick={()=>  handleSort("fullName") }>Name</a></td>
            <td>Country</td>
            <td>Hire Date</td>
            <td>Home Phone</td>
            <td>email</td>
        </tr>
        
    )
}
