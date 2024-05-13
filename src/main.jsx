// arquivo para configuração de rota
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import App    from './App';
import Book   from './pages/book';
import Create from './pages/create';
import Home   from './pages/home';

import './index.css';
import Search from './pages/search';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App />}>
            <Route path='/'         element={<Home   />} />
            <Route path='book/:id'  element={<Book   />} />
            <Route path='create'    element={<Create />} />
            <Route path='/books/:name' element={<Search />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);