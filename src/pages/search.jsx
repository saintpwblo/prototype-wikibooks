import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Search = () => {
    const {name} = useParams()
    const [books, setBooks] = useState([])

    const getBooks = async() =>{
        try {
            const res = await fetch(`http://localhost:3000/books/searchname/${name}`)
            const data = await res.json()

            setBooks(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getBooks()
    }, [])

  return (
    <div>
        <h1>Buscando por: "{name}"</h1>
        { books.length === 0 ? <p>Carregando...</p> : (
            books.map((book) =>(
                <Link to={`/book/${book._id}`} id={book._id}><div key={book._id}>
                    <h2>{book.name}</h2>
                    <p>Autor: {book.author}</p>
                </div></Link>
            ))
        )}

    </div>
  )
}

export default Search