import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
// import ReactDom from 'react-dom';
import './App.css';

class App extends Component  {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: ""
    };

    
  }


  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({users: users});
        // console.log(users)
        });
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }


  render() {
      const users = this.state.users;
      const searchField = this.state.searchField;

      const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchField.toLowerCase() )
      })
    return(
      <div className="App">

     <SearchBox 
       placeholder="search users"
       handleChange = {this.handleChange}
     />
      <CardList users={filteredUsers} />
      </div>
    )
    
  };
}

export default App;
