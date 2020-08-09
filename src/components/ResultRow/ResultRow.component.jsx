import React from 'react'


const TdStyle = {
   padding: "5px",
   border: "1px solid black"
}

export default function ResultRow(props) {
    return (
        <tr>
            <td style={TdStyle}>Picture</td>
            <td style={TdStyle}>Name</td>
            <td style={TdStyle}>Hire Date</td>
            <td style={TdStyle}>Years With us</td>
            <td style={TdStyle}>Phone</td>
            <td style={TdStyle}>email</td>
        </tr>
    )
}
// years with company will be results[i].registered.age
// home phone will be results[i].phone
// will be results[i].picture.thumbnail
// birthday will be 