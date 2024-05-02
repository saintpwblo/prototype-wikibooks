import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
const Navbar = () => {

  const [name, setName] = useState()
  // const [bookName, setBookName] = useState()
  const navigate = useNavigate()

  // const searchBook = (e)=>{
  //   e.preventDefault()
    
  //   navigate(`livros/${name}`)
  //   document.getElementById('bookname').value = ''
  // }

  return (

    <nav className='navbar'>

        <h2><Link to={`/`}>Livros</Link></h2>

        <form className='formNav'>
          <input type="text" placeholder='Pesquise um livro...' onChange={(e)=>setName(e.target.value)} className="inputtext" id='bookname'/ >
         <Link to={`livros/${name}`}> <input type="submit" value="Buscar" className="btnsubmit"/></Link>
        </form>

        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li className='newbtn'><Link to={`/novo`}>Novo livro</Link></li>
        </ul>

    </nav>

  )
}

export default Navbar