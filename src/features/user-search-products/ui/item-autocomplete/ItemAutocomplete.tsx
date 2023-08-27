import React, { FC } from 'react';
import styled from 'styled-components';

type ItemAutocompleteProps = {
  productItem: string;
};

const StyledItemAutocomplete = styled.li`
  width: 100%;
  padding: 1rem;

  &:hover {
    background-color: #ccc;
    transition: 0.25s background-color;
  }
`;
export const ItemAutocomplete: FC<ItemAutocompleteProps> = ({
  productItem,
}) => {
  return <StyledItemAutocomplete>{productItem}</StyledItemAutocomplete>;
};
