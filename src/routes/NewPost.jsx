import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewPost.css'
import bookFetch from '../axios/config'
const NewPost = () => {
    const navigate = useNavigate()

    const[name, setName] = useState()
    const[author, setAuthor] = useState()
    const[description, setDescription] = useState()
    const[year, setYear] = useState()
    const[page_number, setPage] = useState()

    const insertBook = async(e)=>{
        e.preventDefault()

        await bookFetch.post('/', {
                name: name,
                author: author,
                description: description,
                year: year,
                page_number: page_number
            })

        navigate('/')
    }
  return (
    <div className='new-post'>
        <h2>Inserir novo post:</h2>
        <form onSubmit={(e)=> insertBook(e)}>
            <div className='form-control'>
                <label htmlFor='name'>Título do livro:</label>
                <input type="text" 
                    name='name' 
                    placeholder='Título do livro...' 
                    id='name'
                    onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='author'>Autor:</label>
                <input type="text" 
                    name='author' 
                    placeholder='Nome do autor...' 
                    id='author'
                    onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='description'>Descrição:</label>
                <textarea type="textarea" 
                    name='description' 
                    placeholder='Descrição...' 
                    id='description'
                    onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='year'>Ano da primeira edição:</label>
                <input type="text" 
                    name='year' 
                    placeholder='Ano...' 
                    id='year'
                    onChange={(e) => setYear(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor='page'>Número de páginas:</label>
                <input type="number" 
                    name='page' 
                    placeholder='Número de páginas...' 
                    id='page'
                    onChange={(e) => setPage(e.target.value)}/>
            </div>
            <input type="submit" value="Cadastrar livro" className='btn'/>
        </form>
    </div>
  )
}

export default NewPost