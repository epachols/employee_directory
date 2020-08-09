import React from 'react'




const TdStyle = {
   padding: "5px",
   border: "1px solid black"
}

export default function ResultRow(props) {
    return (
        <tr>
            <td style={TdStyle}>picture thumbnail</td>
            <td style={TdStyle}>first + last name</td>
            <td style={TdStyle}>email</td>
            <td style={TdStyle}>Years With us</td>
            <td style={TdStyle}>Birthday</td>
        </tr>
    )
}
// years with company will be results[i].registered.age
// home phone will be results[i].phone
// will be results[i].picture.thumbnail
// birthday will be 