import React from 'react'


const TdStyle = {
   padding: "5px",
   border: "1px solid black"
}

export default function ResultRow(props) {
    return (
        <tr>
            <td style={TdStyle}>
                <img src={props.employee.picture.thumbnail}/>
            </td>
            <td style={TdStyle}>{props.employee.name.first} {props.employee.name.last}</td>
            <td style={TdStyle}>{props.employee.registered.date.slice(0, 10)}</td>
            <td style={TdStyle}>{props.employee.registered.age}</td>
            <td style={TdStyle}>{props.employee.phone}</td>
            <td style={TdStyle}>{props.employee.email}</td>
        </tr>
    )
}
// years with company will be results[i].registered.age
// home phone will be results[i].phone
// will be results[i].picture.thumbnail
// birthday will be 