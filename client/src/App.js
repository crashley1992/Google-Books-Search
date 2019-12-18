import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from './component/Jumbotron/Jumbotron';
import NavTabs from './component/Navbar/Navbar';
import Wrapper from './component/Wrapper/Wrapper';
import Search from './pages/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    search: "",
    books: [],
    results: [],
  };

  resultsDisplay = data => {
      this.setState({ books: data.items });
  };

  searchGoogleBooks = (event) => {
    event.preventDefault()
      let urlQuery = `https://www.googleapis.com/books/v1/volumes?q=${
        this.state.query}`

    axios
        .get(urlQuery)
        .then( response => {
            console.log(response);
            this.resultsDisplay(response.data);
        })
        .catch( error => {
            console.log(error)
        })
    };

  handleInput = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      });
      console.log(`query test ${this.state.query}`);
  }

  render() {
  return (
    <div className="App">
    <Router>
      <NavTabs />
        <Switch>
        <Route exact path="/search" render={() => <Search books={this.state.books}/>} />
        </Switch>
    </Router>
    <Jumbotron 
      handleInput={this.handleInput}
      searchGoogleBooks={this.searchGoogleBooks}
    />
    </div>
  );
  }
}
 

export default App;
