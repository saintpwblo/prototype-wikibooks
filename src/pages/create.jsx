import React, { useState } from 'react'
import './create.css'
import { Link, useNavigate } from 'react-router-dom'

const create = () => {
  const navigate = useNavigate()

  const [name, setName] = useState()
  const [author, setAuthor] = useState()
  const [description, setDescription] = useState()
  const [year, setYear] = useState()
  const [page_number, setPage] = useState()

  const insertBook = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://localhost:3000/books/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        author: author,
        description: description,
        year: year,
        page_number: page_number
      })
    })
  
    if (response.ok) {
      alert('Livro cadastrado com sucesso.')
      navigate('/')
    } else {
      alert(`Erro ao cadastrar livro.`)
    }
  }

  return (
    <div>
      <h1>Adicionar um novo livro</h1>
      <p>Digite as informações necessárias para o cadastro do livro.</p>
      
      <form onSubmit={(e) => insertBook(e)}>
        
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
        </div>
        
        <div>
          <label htmlFor="name">Autor:</label>
          <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        
        <div>
          <label htmlFor="description">Descrição:</label>
          <textarea name="description"  onChange={(e) => setDescription(e.target.value)}/>
        </div>
        
        <div>
          <label htmlFor="year">Ano de publicação:</label>
          <input type="text" name="year" onChange={(e) => setYear(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="page_number">Número de páginas:</label>
          <input type="number" name="page_number" onChange={(e) => setPage(e.target.value)}/>
        </div>

        <button>Confirmar</button>
      </form>
    </div>
  );
}

export default create