import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from './component/Jumbotron/Jumbotron';
import NavTabs from './component/Navbar/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved'
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
      let urlQuery = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`

      console.log(`query test ${this.state.search}`);

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
    this.setState({ search: event.target.value });

  }

  render() {
  return (
    <div className="App">
    <Router>
      <NavTabs />
        <Route exact path="/search" render={() => <Search books={this.state.books}/>} />
        <Route path="/books" component={Saved} />
        <Route exact path="/books/:id" component={null} />
        <Route component={null} />
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
