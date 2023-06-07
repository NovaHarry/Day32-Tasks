import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import Dashboard from './Dashboard';
import {TextField} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { bookSchemaValidation } from './AddBooks';

const EditBooks = ({books, setBooks}) => {

    const navigate = useNavigate();

    const {id} = useParams();

    //FORMIK VALIDATIONS

    const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
        initialValues: {
            id: books[id].id,
            bookName: books[id].bookName,
            volume: books[id].volume,
            released: books[id].released,
            author: books[id].author
        },
        validationSchema: bookSchemaValidation,
        onSubmit: (updatedBookData)=>{
            updateBook(updatedBookData)
            console.log(updatedBookData)
        }
    })

    // const [idx, setIdx] = useState("");
    // const [name, setName] = useState("");
    // const [volume, setVolume] = useState("");
    // const [released, setReleased]= useState("");
    // const [author, setAuthor] = useState("");

    

    //const selectedBook = books.filter((book)=>book.id === idx);

    // useEffect(()=>{
    //     setIdx(selectedBook.id)
    //     setName(selectedBook.bookName)
    //     setVolume(selectedBook.volume)
    //     setReleased(selectedBook.released)
    //     setAuthor(selectedBook.author)
    // },[]);

    const updateBook = (updatedBookData)=>{

        const editIndex = books.findIndex(book => book.id === id);

       console.log("EDIT IDX" ,editIndex)

        books[id] = updatedBookData;

        setBooks([...books]);
        navigate('/');

    }

  return (
    <Dashboard
        title = "Add new Book">
        <div className='container'>
            <div className='field'>

            <form className='field' onSubmit={handleSubmit}>
            <TextField id="outlined-basic" 
            label="Id" 
            variant="outlined"
            name= "id" 
            value = {values.id}
            onBlur= {handleBlur}
            onChange={handleChange}/>

            {touched.id && errors.id ? <p style={{color:"crimson"}}>{errors.id}</p> :""}

            <TextField id="outlined-basic" 
            label="Book Name" 
            variant="outlined" 
            name= "bookName" 
            value = {values.bookName} 
            onBlur= {handleBlur}
            onChange={handleChange}/>

           {touched.bookName && errors.bookName ? <p style={{color:"crimson"}}>{errors.bookName}</p> :""}

            <TextField id="outlined-basic" 
            label="Book Volume" 
            variant="outlined" 
            name= "volume" 
            value = {values.volume} 
            onBlur= {handleBlur}
            onChange={handleChange}/>

            {touched.volume && errors.volume ? <p style={{color:"crimson"}}>{errors.volume}</p> :""} 

            <TextField id="outlined-basic" 
            label="Release Date" 
            variant="outlined" 
            name= "released" 
            value = {values.released} 
            onBlur= {handleBlur}
            onChange={handleChange}/>

            {touched.released && errors.released ? <p style={{color:"crimson"}}>{errors.released}</p> :""}

            <TextField id="outlined-basic"
            label="Book Author" 
            variant="outlined" 
            name= "author" 
            value = {values.author} 
            onBlur= {handleBlur}
            onChange={handleChange}/>

            {touched.author && errors.author ? <p style={{color:"crimson"}}>{errors.author}</p> :""}

            <Button
            type="submit">
            Update Book
            </Button>

            </form>
            </div>
        </div>
        </Dashboard>
  )
}

export default EditBooks