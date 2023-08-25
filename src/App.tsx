import React, { FC } from 'react';
import { Header } from './shared/ui/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/not-found/NotFound';
import { Category } from './pages/category/Category';
import { Product } from './pages/product/Product';
import { BreadCrumbs } from './features/breadcrumbs/BreadCrumbs';
import './app/index.css';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 1300px;
`;
export const App: FC = () => {
  return (
    <Router>
      <Header />
      <StyledMain>
        <BreadCrumbs />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category' element={<Category />} />
          <Route path='/:category/:id' element={<Product />} />
          <Route path='/:category/*' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </StyledMain>
    </Router>
  );
};
