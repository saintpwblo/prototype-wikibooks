import { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

import '././home.css';

// importando variáveis de ambiente para requisições API
const t = import.meta.env.VITE_URL;

const Home = () => {
  const [allBooks, setBooks] = useState([]);
  const [cover, setCover] = useState([]);

    const getBooks  = async (url) => {
    const response  = await fetch(url);
    const data      = await response.json();

    

    setBooks(data);
  }


  useEffect(() => {
    getBooks(t);
  }, []);

  return (
    <main>
      <div className="introducao">
        <p>A sua biblioteca de livros nacionais ideal!
          Pesquise e obtenha informações sobre diversos
          títulos brasileiros em nosso site.</p>
      </div>

      <div className="colection-books poppins">
        <ul>
          <li className="create-book contaneir-book">
          <Link to="create">
            <button name='icon-create' id="icon-create"> <IoAddCircle fontSize={70}/> </button>
            <h2>Adicionar Livro</h2>
            <p>Aumente a coleção!</p>
          </Link>
          </li>

          {allBooks.map((book, index) => (
            <Link to={`/book/${book._id}`} key={book._id}>
              <li className="contaneir-book">
                <div className="contaneir-img">
                  <img className="contaneir-img" src={`${book.cover}`}/>
                </div>
                <h2>{book.name}</h2>
                <p>{book.author}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>

    </main>
  );
};

export default Home;