import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import bookFetch from '../axios/config'

const Search = () => {
    const [books, setBooks] = useState([])
    const {nome} = useParams()

    const getBooks = async()=>{
        try {
            let res = await bookFetch.get(`/searchname/${nome}`)
            let data = res.data
            
            setBooks(data)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        getBooks()
    })

  return (
    <div className='home'>
        <h1>Pesquisando por: &#34;{nome}&#34;</h1>

        { books.length === 0 ? <p>Carregando...</p> : (
            books.map((book) =>(
                <div className='post' key={book._id}>
                    <h2>{book.name}</h2>
                    <p>Autor: {book.author}</p>
                    <Link to={`../../livro/${book._id}`} className='btn' id={book._id}>Ver mais</Link>
                </div>
            ))
        )}

    </div>
  )
}

export default Search