import React from 'react';
import './App.css';

import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({robots: data}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { robots, searchField } = this.state;
    const filtered = robots.filter((robot) => (
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className="App">
        <h1>Robolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder='Search'/>
        <CardList robots={filtered} />
      </div>
    );
  }
}

export default App;
