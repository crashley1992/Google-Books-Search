import React, { Component } from 'react';
import axios from "axios";
import NoBooksDisplay from '../component/NoBooksDisplay/NoBooksDisplay';
import BookResult from  '../component/BookResult/BookResult';
import RemoveBookBtn from '../component/RemoveBookBtn/RemoveBookBtn';

class Saved extends Component {
    state = {
      savedBooks: [],
      initialized: true
    }
  
    componentDidMount() {
      this.getBooks();
    }
  
    getBooks = () => {
      axios.get("/api/books")
        .then(res => {
          this.setState({ savedBooks: res.data })
        })
        .catch((err => console.log(err)))
    }
  
    deleteFromDB = id => {
      console.log(id);
  
      axios.delete(`/api/books/${id}`)
        .then( () => {
          console.log('Book Deleted');
          this.getBooks();
          
        })
        .catch(err => console.log(err))
    }
  
    render() {
        return (
         <div>
             {this.state.savedBooks.length > 0 ?
              <BookResult>
                {this.state.savedBooks.map(book => {
                  console.log(book)
              return (
                <div>
                <BookResult
                    key={book._id}
                    authors={book.authors}
                    title={book.title}
                    synopsis={book.synopsis}
                    link={book.link}
                    thumbnail={book.thumbnail}
                      // delete={()=> this.deleteFromDB(book._id)}
                      />
                          <RemoveBookBtn
                            onClick={() => this.deleteFromDB(book._id)}
                          />
                         </div>
              )
            })}
            </BookResult>
            :
            <NoBooksDisplay/>         
        }    
        </div>
     );
    }
  }
            
  
  export default Saved;