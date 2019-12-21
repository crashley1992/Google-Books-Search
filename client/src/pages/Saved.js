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
                {(this.props.savedBooks && this.props.savedBooks.length > 0) ? 
            this.props.books.map(savedBooks => {
                  console.log(savedBooks)
              return (
                <div>
                <BookResult
                    key={savedBooks._id}
                    authors={savedBooks.authors}
                    title={savedBooks.title}
                    synopsis={savedBooks.synopsis}
                    link={savedBooks.link}
                    thumbnail={savedBooks.thumbnail}
                      // delete={()=> this.deleteFromDB(book._id)}
                      />
                          <RemoveBookBtn
                            onClick={() => this.deleteFromDB(savedBooks._id)}
                          />
                         </div>
              )
            })
            :
            <NoBooksDisplay/>         
        }    
        </div>
     );
    }
  }
            
  
  export default Saved;