import React from 'react';
import ResultRow from '../ResultRow/ResultRow.component';
import SortRow from '../SortRow/SortRow.component'

const style = {
    borderSpacing: "1px",
    width: "95%"
}

function ResultTable(props) {
    return (
        <table style={style}>
            <SortRow employees={props}/>
            {props.employees.map(employee => <ResultRow employee={employee} />)}
        </table>
    )
}

export default ResultTable