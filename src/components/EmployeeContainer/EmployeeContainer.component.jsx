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
          this.setState({ result: res.data.results });
          //TODO: maybe map the results up here and add fullname instead of at render?
          console.log(res.data.results)
        })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  //TODO: figure out why page reloads every time I sort. do I need to not sort the array and rerender? thought that was the point, makin it easy

  handleSort = (choice) => {

    const newResult = [...this.state.result];
    //TODO: the below a.choice is wrong -> I am trying to pass back up a value to sort by based on what is clicked down below
    newResult.sort((a,b) => (a.name.first - b.name.first));

    console.log( { newResult } );

    this.setState({result: newResult})
  }

  render() {
    const {result, search} = this.state;

    // //TODO: working fullname into the sort feature by adding a "fullname" value to each returned employee.

    // const resultsWithFullName = result.map(employee=> {
    //     let fullName =  `${employee.name.first} ${employee.name.last}`
    //     console.log(fullName);
    //   employee.fullName= fullName
    // })
    // console.log({resultsWithFullName});


    const filteredResult = result.filter((result) =>
    result.name.first.toLowerCase().includes(search.toLowerCase())
  );
   
    return (
      <div>
        <br></br>
        <div>
          <h4>Search By First Name</h4>
          <SearchBar 
          placeholder="search by first name"
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