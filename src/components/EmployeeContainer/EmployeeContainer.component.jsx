import React, {Component} from 'react';
import API from "../../utils/API";
import ResultTable from "../ResultTable/ResultTable.component";
import SearchBar from "../SearchBar/SearchBar.component"

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    API.search()
      .then((res) => {
          this.setState({ result: res.data.results });
          console.log(res.data.results)
        })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  render() {
    const {result, search} = this.state;
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
          />
        </div>
        <br></br>
        <br></br>
        <div>
            <ResultTable employees={filteredResult}/>
        </div>
      </div>
    );
  }
}

export default EmployeeContainer