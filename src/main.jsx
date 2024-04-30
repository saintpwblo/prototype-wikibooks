import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Book from './routes/Book.jsx'
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Search from './routes/Search.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/new',
        element: <NewPost />
      },
      {
        path: '/livro/:id',
        element: <Book/>
      },
      {
        path: '/livros/:nome',
        element: <Search />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
