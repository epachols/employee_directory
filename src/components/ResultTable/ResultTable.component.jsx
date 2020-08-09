import React from 'react';
import ResultRow from '../ResultRow/ResultRow.component';
import SortRow from '../SortRow/SortRow.component'

const style = {
    borderSpacing: "1px",
    width: "95%",
    margin: "auto"
}

function ResultTable({ employees, handleSort }) {
    return (
        <table style={style}>
        <tbody>
            <SortRow handleSort={handleSort}/>
            {employees.map(employee => <ResultRow key={employee.login.uuid} employee={employee} />)}

        </tbody>
        </table>
    )
}

export default ResultTable