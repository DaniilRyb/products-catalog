import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HoverCardCategory = styled.div<{ bg: string }>`
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  color: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  text-decoration: none !important;
  text-transform: uppercase;
  font-size: 1.75rem;
  background-color: ${({ bg }) => bg};

  &:hover {
    box-shadow: 2px 2px 25px 6px ${({ bg }) => bg};
    transition:
      0.5s box-shadow,
      0.5s background-color;
    border: none;
    background-color: #e8e8e8;
    text-decoration: none;
    color: #000;
  }
`;

type CardCategoryProps = {
  category: string;
  color: string;
};

export const CardCategory: FC<CardCategoryProps> = ({ category, color }) => {
  return (
    <Link to={`/category/${category}`}>
      <HoverCardCategory bg={color}>{category}</HoverCardCategory>
    </Link>
  );
};
