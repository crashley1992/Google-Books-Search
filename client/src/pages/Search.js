import React, { Component } from "react";
import axios from "axios";
import AddBookButton from "../component/AddBookButton/AddBookButton";
import BookResult from  '../component/BookResult/BookResult';
import BookItems from  '../component/BookResult/BookResult';
import NoBooksDisplay from "../component/NoBooksDisplay/NoBooksDisplay";
import { Row, Col } from "../component/Grid/Grid";

class Search extends Component {
//   state = {
//     search: "",
//     books: [],
//     results: [],
//   };

//   resultsDisplay = data => {
//       this.setState({ books: data.items });
//   };

//   searchGoogleBooks = () => {
//       let urlQuery = `https://www.googleapis.com/books/v1/volumes?q=${
//         this.state.query}`

//     axios
//         .get(urlQuery)
//         .then( response => {
//             console.log(response);
//             this.resultsDisplay(response.data);
//         })
//         .catch( error => {
//             console.log(error)
//         })
//     };

//   handleInput = event => {
//       const { name, value } = event.target;
//       this.setState({
//           [name]: value
//       });
//       console.log(`query test ${this.state.query}`);
//   }

  render() {
      console.log(`search props: `, this.props);
    return (
        <Row>
          <Col size="md-12">
          <div>
            {(this.props.books && this.props.books.length > 0) ? 
            this.props.books.map(book => {
              return (
                <div>
                <BookResult
                key={book.id} 
                authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                title={book.volumeInfo.title}
                synopsis={book.volumeInfo.description ? 
                  book.volumeInfo.description : "No Description Available"}
                link={book.volumeInfo.infoLink}
                thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                  book.volumeInfo.imageLinks.thumbnail : "#"}
                />
  
                <AddBookButton
                authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                title={book.volumeInfo.title}
                synopsis={book.volumeInfo.description ? 
                  book.volumeInfo.description : "No Description Available"}
                link={book.volumeInfo.infoLink}
                thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                  book.volumeInfo.imageLinks.thumbnail : "#"}
                />
                </div>
              )
            })
            :
            <NoBooksDisplay/>         
            }
            
          </div>
          </Col>
        </Row>
      );
    }
  }

export default Search;
