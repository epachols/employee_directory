import React, {Component} from 'react';
import API from "../../utils/API";
import ResultTable from "../ResultTable/ResultTable.component";
import SearchBar from "../SearchBar/SearchBar.component"

class EmployeeContainer extends Component {
  state = {
    result: {},
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

  handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };

  render() {
    return (
      <div>
        <br></br>
        <div>
          <h4>Search Employees By Name</h4>
          <SearchBar />
        </div>
        <br></br>
        <br></br>
        <div>
            <ResultTable props={this.state.result}/>
        </div>
      </div>
    );
  }
}

export default EmployeeContainer