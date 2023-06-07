import React from 'react'
import Dashboard from './Dashboard';
import { Button, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const BooksMain = ({books, setBooks}) => {

    const navigate = useNavigate();

    const deleteBook = (idx)=>{
        const deletedBooks = books.filter((book)=>book.id !== idx)
        setBooks(deletedBooks);
    }

  return (
    <Dashboard
            title="Books">
            <div className="user-content">
                {books.map((books, idx) => (
                    <Card>
                    <Card.Body>
                        <div key = {idx} className="user-card">
                        <h1>{books.bookName}</h1>
                        <p>Volume : {books.volume}</p>
                        <p>Released : {books.released}</p>
                        <p>Author : {books.author}</p>
                        </div>
                    </Card.Body>
                    <Card.Footer className="footer">
                    <div className="btn-group">
                       <Button className="btn card-btn"
                       onClick={()=>navigate(`/bookdetails/${idx}`)}
                       >
                        View</Button>
                        <Button className="btn card-btn"
                        onClick={()=>navigate(`/editbook/${idx}`)}
                        >
                        Edit</Button>
                        <Button className="btn del-btn"
                        onClick={()=>deleteBook(books.id)}
                        >Delete</Button>
                    </div>
                    </Card.Footer>
                    </Card>
                ))}
            </div>
        </Dashboard>
  )
}

export default BooksMain;