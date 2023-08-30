import React, { FC } from 'react';
import { Header } from './shared/ui/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Main } from './pages/main/Main';
import { NotFound } from './pages/not-found/NotFound';
import { Category } from './pages/category/Category';
import { Product } from './pages/product/Product';
import { BreadCrumbs } from './shared/ui/breadcrumbs/BreadCrumbs';
import { ProductsPagination } from './features/pagination/ui/products-pagination/ProductsPagination';
import './app/index.css';

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
          <Route path='/' element={<Main />} />
          <Route path='/all' element={<ProductsPagination />} />
          <Route path='/:category' element={<Category />} />
          <Route path='/:category/:id' element={<Product />} />
          <Route path='/:category/*' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </StyledMain>
    </Router>
  );
};
