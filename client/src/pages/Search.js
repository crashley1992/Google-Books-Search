import React, { Component } from "react";
import AddBookButton from "../component/AddBookButton/AddBookButton";
import BookResult from  '../component/BookResult/BookResult';
import NoBooksDisplay from "../component/NoBooksDisplay/NoBooksDisplay";
import { Container, Row, Col } from "../component/Grid/Grid";

class Search extends Component {

  render() {
      console.log(`search props: `, this.props);
    return (
      <Container>
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
        </Container>
      );
    }
  }

export default Search;
