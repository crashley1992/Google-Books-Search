import React from 'react';
import { Container} from "../Grid/Grid";
import { Col } from "../Grid/Grid";
import { Row } from "../Grid/Grid";
import Thumbnail from "../Thumbnail/Thumbnail";
import './book-result.css';

const BookResult = (props) => {
    return(
            <ul className="list-group">
            <li>
                <Container>
                  <Row>
                    <Col size="xs-4 sm-2">
                      <Thumbnail src={props.thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                      <h3>{props.title}<span><h5>{props.authors.join(", ")}</h5></span></h3>
                      <p>
                        {props.synopsis}
                      </p>
                      <a
                        target="_blank"
                        href={props.link}
                        rel="noopener noreferrer"
                      >
                        Go to book!
                      </a>
                    </Col>
                  </Row>
                </Container>
              </li>
            </ul>
            );
        }
        
              
            
            
          

export default BookResult;