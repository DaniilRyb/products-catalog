import React, { FC } from 'react';
import { Header } from './shared/ui/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/not-found/NotFound';
import { Category } from './pages/category/Category';
import { Product } from './pages/product/Product';
import './app/index.css';

export const App: FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/category/:category/:id' element={<Product />} />
        <Route path='/category/:category/*' element={<NotFound />} />
        <Route path='/category/*' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};
