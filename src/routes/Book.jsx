import React, { useState } from 'react'
import bookFetch from '../axios/config'
import {  useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Book = () => {

    const [book, setBook] = useState()
    const {id} = useParams()
    const navigate = useNavigate()

    const getBook = async() =>{
        try {
            let res = await bookFetch.get(`/searchid/${id}`)
            let data = res.data
            
            setBook(data)
            
        } catch (error) {
            console.log(error)
        }
    }
    const deleteBook = async() =>{
        let askDelete = confirm('Deseja excluir livro?')
        if(askDelete){
            await bookFetch.delete(`/${id}`)
            alert('Livro deletado com sucesso.')
            navigate('/')
        }


    }

    useEffect(()=>{
        getBook()
    }, [])

  return (
    <div>
        {!book ? <p>Carregando...</p> : (
            <>
            <div className='post'>
                <h1>{book.name}</h1>
                <p>Autor: {book.author}</p>
                <p>{book.description}</p>
                <p>Data de publicação: {book.year}</p>
                {book.page_number ? <p>Número de páginas: {book.page_number}</p> : ''}
                
            </div>
            <div className='buttons'>
                <button onClick={deleteBook} className='btn'>Deletar livro</button>
                <Link to={`../../atualizar/${id}`}><button className='btn'>Atualizar livro</button></Link>
            </div>
            </>
        )}
        
    </div>
    )}
    

export default Book