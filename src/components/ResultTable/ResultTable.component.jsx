import React from 'react';
import ResultRow from '../ResultRow/ResultRow.component'

const style = {
    borderSpacing: "1px",
    width: "95%"
}

function ResultTable(props) {
    return (
        <table style={style}>
            <tr>fresh table row place holder</tr>
            <ResultRow props={props}/>
            
        </table>
    )
}

export default ResultTable