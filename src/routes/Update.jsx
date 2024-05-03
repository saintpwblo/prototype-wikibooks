import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import bookFetch from '../axios/config'

const Update = () => {
    const[image, setImage] = useState()

    const navigate = useNavigate()

    const[name, setName] = useState('')
    const[author, setAuthor] = useState('')
    const[description, setDescription] = useState('')
    const[year, setYear] = useState('')
    const[page_number, setPage] = useState('')

    const [book, setBook] = useState({})

    const {id} = useParams()

    const getBook = async() =>{
        try {
        let res = await bookFetch.get(`/searchid/${id}`)
        let data = res.data
        
        setName(data.name)
        setAuthor(data.author)
        setDescription(data.description)
        setYear(data.year)
        setPage(data.page_number)

        } catch (error) {
            console.log(error)
        }
       
    }

    

    const updateBook = async(e) =>{
        e.preventDefault()
        const res = await bookFetch.put(`/${id}`, {
            name: name,
            author: author,
            description: description,
            year: year,
            page_number: page_number
        })
        
        alert('Livro atualizado com sucesso.')
        navigate('/')
    }

    const addImage = async() =>{
        const formData = new FormData()
        formData.append('book-cover', image)

        await bookFetch.put(`/cover/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    useEffect(() =>{
        getBook()
    }, [])

  return (
    <div className='new-post'>
        {!book ? <p>Carregando...</p> : (
            <form>
            <div className='form-control'>
            <input type="file" id='image' onChange={(e) => setImage(e.target.files[0])}/>
                <label htmlFor='name'>Título do livro:</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="author">Autor:</label>
                <input type="text" name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="description">Descrição:</label>
                <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="year">Ano da primeira edição:</label>
                <input type="text" name="year" id="year" value={year} onChange={(e) => setYear(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="page">Número de páginas:</label>
                <input type="number" name="page" id="page" value={page_number} onChange={(e) => setPage(e.target.value)}/>
            </div>
            <button onClick={(e) => {updateBook(e); addImage}} className='btn'>Atualizar livro</button>
        </form>
        )}
        
    </div>
    
  )
}

export default Update
