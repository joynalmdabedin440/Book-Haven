import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import BookDetails from './components/bookDetails.jsx';
import ListedBooks from './components/ListedBooks.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader:()=>fetch("booksData.json")
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=>fetch("booksData.json")
        
      },
      {
        path: '/signIn',
        element:<p>This page is under construction</p>
      },
      {
        path: "/pageToRead",
        element: <p>This page is under construction</p>
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
