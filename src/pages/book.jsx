import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./book.css";


const Book = () => {

  const navigate = useNavigate()
  
  const urlfetch         = 'http://localhost:3000/books/searchid/'
  const URL_related = import.meta.env.VITE_URL;

  const [ img, setImg] = useState()

  const { id } = useParams();
  const [book, setBook] = useState(null);

  const getBook    = async (urlfetch) => {
    try{
      const response = await fetch(urlfetch);
      const data     = await response.json();
      setBook(data);
    }catch(error){
      console.error('Error fetching related books data:', error);
    }
  };

  const getBookCover = async() =>{
    let image = await axios.get(`http://localhost:3000/books/cover/${id}`, {responseType: 'blob'})
    let urlImg = URL.createObjectURL(image.data)

    setImg(urlImg)
  }

  const [allBooks, setRelatedBooks] = useState([]);

  const   getBooks  = async (url) => {
    const response  = await fetch(url);
    const data      = await response.json();

    setRelatedBooks(data.slice(0, 4));
  }

  const deleteBook = async() =>{
    const res = await fetch(`http://localhost:3000/books/${id}`, {method: 'DELETE'})

    if(res.ok){
       alert('Livro excluído com sucesso.')
       navigate('/')
      }
    else alert('Falha ao excluir livro.')
  }

  useEffect(() => {
    const bookURL = `${urlfetch}${id}`;
    getBook(bookURL);

    const viewbooksUrl = `${URL_related}`;
    getBooks(viewbooksUrl);

    getBookCover()
  }, [id]);

  const handleBookClick = (bookId) => {
    history.push(`/book/${bookId}`);
  };

  return (
    <div className="book">
      {book && (
        <div className="book-contaneir">
          <div className="contaneir-img">
            {/* <img className="contaneir-img" src={`${book.cover}`}/> */}
            <img className="contaneir-img" src={img}/>
          </div>

          <div className="about-book">
            <div className="titles-contaneir poppins">
              <h2>{book.name}</h2>
              <p>{book.author}</p>
              <p id="year">({book.year})</p>
            </div>

            <p className="description">"{book.description}"</p>
          </div>
          <div>
            <button>Atualizar</button>
            <button onClick={deleteBook}>Excluir</button>
          </div>
        </div>
        
      )}

      <div className="more-contaneir">
      <h1>Confira mais:</h1>
        <div className="list_books">
          {allBooks.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id} onClick={() => handleBookClick(relatedBook._id)}>
              <ul>
                <li className="contaneir-book">
                  <div className="contaneir-img">
                    <img className="contaneir-img" src={book.cover}/>
                  </div>
                  <h2>{book.name}</h2>
                  <p>{book.author}</p>
                </li>
              </ul>
            </Link>
          ))}
        </div>

        <Link to="/">
          <button>Ver biblioteca</button>
        </Link>
      </div>

    </div>
  );
};

export default Book;