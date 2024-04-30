import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2><Link to={`/`}>Livros</Link></h2>
        <ul>
            <li><Link to={`/`}>Home</Link></li>
            <li className='newbtn'><Link to={`/new`}>Novo livro</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar