import React, {Component} from 'react';
import API from "../../utils/API";
import ResultTable from "../ResultTable/ResultTable.component";
import SearchBar from "../SearchBar/SearchBar.component"
import "./EmployeeContainer.style.css";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        const resultsWithFullName = res.data.results.map(employee=> {
          let fullName =  `${employee.name.first} ${employee.name.last}`
          // console.log(fullName);
        employee.fullName= fullName
        return employee
      })
        //TODO: extract to separate component if any more mods necesssary
          this.setState({ result: resultsWithFullName });
          // console.log(res.data.results)
        })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  handleSort = (choice) => {
    const newResult = [...this.state.result];
    newResult.sort((a,b) => (a[choice] > b[choice]) ? 1: -1);

    console.log( { newResult } );

    this.setState({result: newResult})
  }

  render() {
    const {result, search} = this.state;

    const filteredResult = result.filter((result) =>
    result.fullName.toLowerCase().includes(search.toLowerCase())
  );
   
    return (
      <div>
      <h1>Employee Directory</h1>
        <br></br>
        <div>
          <h4>Search By Name, first or last</h4>
          <SearchBar 
          placeholder="search by name"
          handleChange={this.handleChange}
          value={this.state.search}
          />
        </div>
        <br></br>
        <br></br>
        <div className="tableDiv">
            <ResultTable employees={filteredResult} handleSort={this.handleSort}/>
        </div>
        <div className="footer">
          This mock employee registry brought to you by &copy;Code Crow
        </div>
      </div>
    );
  }
}

export default EmployeeContainer