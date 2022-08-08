import { BrowserRouter, Link } from 'react-router-dom';
import React from "react";
import { Router } from './router/router';


export const App = () => {

  return (
    <BrowserRouter>
    
      <div className='App'>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/Page1'>Page1</Link>
        <br />

        <Link to='/Page2'>Page2</Link>
        
      </div>
      <Router />

    </BrowserRouter>
   
  );
};
