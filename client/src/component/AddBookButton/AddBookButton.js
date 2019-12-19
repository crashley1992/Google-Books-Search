import React from "react";
import Button from "../Button/Button";
import axios from "axios";
import './addbookbutton.css'

class AddBookButton extends React.Component{
 
    postToDB = (book) => {
        var dbBooks = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          thumbnail: book.thumbnail,
          link: book.link
        }
    
        axios.post("/api/books", dbBooks)
        .then( () => console.log(book.authors + "was added "))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Button type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Save Book
        </Button>
        </div>
        );
    }
  }

  export default AddBookButton;