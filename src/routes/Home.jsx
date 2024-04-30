import React from 'react'

import bookFetch from '../axios/config'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {

    const [books, setbooks] = useState([])

    const getBooks = async() => {
        try {
            const res = await bookFetch.get('/')
            const data = res.data

            setbooks(data)
        } catch (err) {
            console.log(err)
        }
        
    }

    useEffect(() =>{
        getBooks()
    }, [])

  return (
    <div className='home'>
        <h1>Livros</h1>
        {books.length === 0 ? <p>Carregando...</p> : (
            books.map((book) =>(
                <div className='post' key={book._id}>
                    <h2>{book.name}</h2>
                    <p>Autor: {book.author}</p>
                    <p>Data de publicação: {book.year}</p>
                    <Link to={`livro/${book._id}`} className='btn' id={book._id}>Ver mais</Link>
                </div>
            ))
        )}
    </div>
  )
}

export default Home