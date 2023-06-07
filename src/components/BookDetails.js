import React from 'react'
import Dashboard from './Dashboard'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetails = ({books}) => {

    const navigate = useNavigate();
    const {id} =  useParams();
    const book = books[id];
  return (
    <Dashboard
        title = "Books">
        <div className="user-content">
            <Card>
            <Card.Body>
                        <div className="user-card">
                        <h1>{book.bookName}</h1>
                        <p>Volume : {book.volume}</p>
                        <p>Released : {book.released}</p>
                        <p>Author : {book.author}</p>
                        </div>
                    </Card.Body>
                        <Card.Footer className="footer">
                        <Button className="btn card-btn footer-button"
                        onClick={()=>navigate(`/editbook/${book.id -1}`)}
                        >
                        Edit</Button>
                        </Card.Footer>
                    
                    </Card>
        </div>
        </Dashboard>
  )
}

export default BookDetails