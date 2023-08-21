import React, { FC } from 'react';
import { Header } from './shared/ui/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/not-found/NotFound';
import { Category } from './pages/category/Category';
import './app/index.css';

export const App: FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Category />} path='/category/:category' />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </Router>
  );
};
