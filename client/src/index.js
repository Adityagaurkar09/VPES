import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Details from './views/Details/Details';
import Name from './views/Name/Name';
import Namedetail from './views/Namedetails/Namedetail';
import Signup from './views/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Details",
    element: <Details/>
  },
  {
    path: "/name",
    element: <Name/>
  },
  {
    path: "/nameDetail",
    element: <Namedetail/>
  },
  {
    path:"/signup",
    element: <Signup/>
  }
])
root.render(<RouterProvider router={router} />);
