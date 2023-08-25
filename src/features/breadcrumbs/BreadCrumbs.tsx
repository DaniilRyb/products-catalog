import React from 'react';
import Link, { LinkProps } from '@mui/material/Link';
import { Breadcrumbs } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useProductById } from '../../shared/hooks/use-product-by-id/useProductById';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => {
  return <Link {...props} component={RouterLink as any} />;
};

const breadcrumbNameMap: { [key: string]: string } = {
  '/smartphones': 'Smartphones',
  '/laptops': 'Laptops',
  '/fragrances': 'Fragrances',
  '/skincare': 'Skincare',
  '/groceries': 'Groceries',
  '/home-decoration': 'Home decoration',
  '/furniture': 'Furniture',
  '/tops': 'Tops',
  '/womens-dresses': 'Womens dresses',
  '/womens-shoes': 'Womens shoes',
  '/mens-shirts': 'Mens shirts',
  '/mens-shoes': 'Mens shoes',
  '/mens-watches': 'Mens watches',
  '/womens-watches': 'Womens watches',
  '/womens-bags': 'Womens bags',
  '/womens-jewellery': 'Womens jewellery',
  '/sunglasses': 'Sunglasses',
  '/automotive': 'Automotive',
  '/motorcycle': 'Motorcycle',
  '/lighting': 'Lighting',
};

const StylesBreadCrumbs = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/').filter((x) => x);
  console.log(path);
  const idProduct = pathname.replace(/[^0-9]/g, '');
  const { data: productData } = useProductById(idProduct);

  return (
    <StylesBreadCrumbs>
      <Breadcrumbs aria-label='breadcrumb'>
        <LinkRouter underline='hover' color='inherit' to='/'>
          <HomeIcon />
        </LinkRouter>
        {path.map((value, index) => {
          const last = index === path.length - 1;
          const to = `/${path.slice(0, index + 1).join('/')}`;
          return last ? (
            <Typography color='text.primary' key={to}>
              {breadcrumbNameMap[to]
                ? breadcrumbNameMap[to]
                : productData?.title}
            </Typography>
          ) : (
            <LinkRouter underline='hover' color='inherit' to={to} key={to}>
              {breadcrumbNameMap[to]}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
    </StylesBreadCrumbs>
  );
};
