import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import bookFetch from '../axios/config'

const Update = () => {

    const navigate = useNavigate()

    const[name, setName] = useState()
    const[author, setAuthor] = useState()
    const[description, setDescription] = useState()
    const[year, setYear] = useState()
    const[page_number, setPage] = useState()

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

    const updateBook = async() =>{
        await bookFetch.put('/', {
            name: name,
            author: author,
            description: description,
            year: year,
            page_number: page_number
        })

        alert('Livro atualizado com sucesso.')
        navigate('/')
    }

    useEffect(() =>{
        getBook()
    }, [])

  return (
    <div className='new-post'>
        {!book ? <p>Carregando...</p> : (
            <form>
            <div className='form-control'>
                <label htmlFor='name'>Título do livro:</label>
                <input type="text" name="name" id="name" value={book.name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="author">Autor:</label>
                <input type="text" name="author" id="author" value={book.author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="description">Descrição:</label>
                <textarea name="description" id="description" value={book.description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="year">Ano da primeira edição:</label>
                <input type="text" name="year" id="year" value={book.year} onChange={(e) => setYear(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="page">Número de páginas:</label>
                <input type="number" name="page" id="page" value={book.page_number} onChange={(e) => setPage(e.target.value)}/>
            </div>
            <button onClick={updateBook} className='btn'>Atualizar livro</button>
        </form>
        )}
        
    </div>
    
  )
}

export default Update
