import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails'

// React router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/room/:id',
    element: <RoomDetails/> 
  },
  {
    path: '/contact',
    element: <Contact/> 
  }
]);

const App = () => {
  return <div>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </div>;
};

export default App;
