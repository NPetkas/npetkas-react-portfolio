import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import Error from './pages/Error.jsx';
import About from './pages/About.jsx';
import Resume from './pages/Resume.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

// home page set up and router paths 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

// starting at about me page
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
