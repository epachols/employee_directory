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

  //TODO: figure out why page reloads every time I sort. do I need to not sort the array and rerender? thought that was the point, makin it easy

  handleSort = (choice) => {
    const newResult = [...this.state.result];
    //TODO: tried below a.choice is wrong -> I am trying to pass back up a value to sort by based on what is clicked down below
    newResult.sort((a,b) => (a[choice] > b[choice]) ? 1: -1);   

    console.log( { newResult } );

    this.setState({result: newResult})
  }

  render() {
    const {result, search} = this.state;

    // //TODO: working fullname into the sort feature by adding a "fullname" value to each returned employee.



    const filteredResult = result.filter((result) =>
    result.fullName.toLowerCase().includes(search.toLowerCase())
  );
   
    return (
      <div>
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
      </div>
    );
  }
}

export default EmployeeContainer