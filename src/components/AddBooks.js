import React, { useState } from 'react'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { TextField } from '@mui/material';
import * as yup from 'yup';
import {useFormik} from 'formik';

export const bookSchemaValidation = yup.object({
    id: yup.string().required("Please enter the numerical book ID"),
    bookName: yup.string().required("Please enter the book name"),
    volume: yup.string().required("Please enter the book volume"),
    released: yup.string().required("Please enter the book released"),
    author: yup.string().required("Please enter the book author")
})

const AddBooks = ({books , setBooks}) => {


    //FORMIK VALIDATIONS

    const {values, handleChange, handleSubmit, handleBlur, errors, touched} = useFormik({
        initialValues: {
            id: "",
            bookName: "",
            volume: "",
            released: "",
            author: ""
        },
        validationSchema: bookSchemaValidation,
        onSubmit: (newBook)=>{
            addNewBook(newBook)
        }
    })

    const navigate = useNavigate();

    // const [id, setId] = useState("");
    // const [name, setName] = useState("");
    // const [volume, setVolume] = useState("");
    // const [released, setReleased]= useState("");
    // const [author, setAuthor] = useState("");

    const addNewBook =(newBook)=>{

        setBooks([...books,newBook]);
        navigate('/');
    }


  return (
    <Dashboard
        title = "Add new Book">
        <div className='container'>
            <form className='field' onSubmit={handleSubmit}>
            <TextField id="outlined-basic" 
            label="Must be a number" 
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
            type="submit"
            >Add Book</Button>

            </form>
        </div>
        </Dashboard>
  )
}

export default AddBooks