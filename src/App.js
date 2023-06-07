import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import AddBooks from './components/AddBooks';
import BookDetails from './components/BookDetails';
import EditBooks from './components/EditBooks';
import BooksMain from './components/BooksMain';
import { useState } from 'react';
import { bookCollections } from './components/BooksData';



function App() {

  const [books, setBooks] = useState(bookCollections)


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<BooksMain  
        books = {books}
        setBooks = {setBooks}
        />}/>  
      <Route path = '/addbooks' element = {<AddBooks 
      books = {books}
      setBooks = {setBooks}
      />}/>
      <Route path = '/bookdetails/:id' element = {<BookDetails books = {books}/>}/>
      <Route path = '/editbook/:id' element = {<EditBooks
      books = {books}
      setBooks = {setBooks}
      />}/>
    </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;
