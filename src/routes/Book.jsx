import React, { useState } from 'react'
import bookFetch from '../axios/config'
import {  useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {

    const [book, setBook] = useState()
    const {id} = useParams()

    const getBook = async() =>{
        try {
            let res = await bookFetch.get(`/searchid/${id}`)
            let data = res.data
            
            setBook(data)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getBook()
    }, [])

  return (
    <div>
        {!book ? <p>Carregando...</p> : (
            <div>
                <h1>{book.name}</h1>
                <p>Autor: {book.author}</p>
                <p>{book.description}</p>
                <p>Primeira edição: {book.year}</p>
                {book.page_number ? <p>Número de páginas: {book.page_number}</p> : ''}
            </div>
        )}
    </div>
    )}
    

export default Book