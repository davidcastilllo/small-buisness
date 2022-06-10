import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Router  from './Router';

const Main = () => (
 <BrowserRouter>
     <Router />
 </BrowserRouter>
 );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>);


