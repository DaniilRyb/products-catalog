import React, { ChangeEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

import { useOutsideClick } from '../../../../shared/hooks/use-outside-click/useOutsideClick';
import { useSearchProducts } from '../../../../shared/hooks/use-search-products/useSearchProducts';
import { ItemAutocomplete } from '../item-autocomplete/ItemAutocomplete';

const StyledAutocomplete = styled.div`
  position: absolute;
  right: 0;
  top: 54px;
  width: 350px;
  height: 450px;
  box-shadow: 1px 1px 3px 3px #ccc;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: auto;
  z-index: 10;
  background-color: #ece6e6;
  color: #000;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }

  a {
    text-transform: none;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
`;

const StyledLoadingBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.25rem;

  div > li {
    padding: 1rem;
  }
`;

export const InputDebounce: FC = () => {
  const [input, setInput] = useState<string>('');
  const { productsList, status, error } = useSearchProducts(input);
  const { refDiv, refInput, isActive } = useOutsideClick();
  const list = productsList?.products.map(({ title, id, category }) => {
    return {
      label: title,
      id: id.toString(),
      category: category,
    };
  });

  return (
    <>
      <div>
        {status === 'error' && <div>{error}</div>}
        <form>
          <input
            className='form-control'
            style={{ width: '300px' }}
            type='search'
            placeholder='Search products...'
            value={input}
            ref={refInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value);
            }}
          />
        </form>
        {isActive && (
          <StyledAutocomplete ref={refDiv}>
            {status === 'loading' && (
              <StyledLoadingBar>
                <div>
                  <li>LOADING...</li>
                </div>
                <div>
                  <li>
                    {' '}
                    <Spinner />
                  </li>
                </div>
              </StyledLoadingBar>
            )}
            {status === 'success' && (
              <>
                {list?.length ? (
                  <ul>
                    {list.map(({ id, label, category }) => (
                      <Link
                        to={`/${category}/${id}`}
                        key={id}
                        onClick={() => setInput(label)}
                      >
                        <ItemAutocomplete productItem={label.toUpperCase()} />
                      </Link>
                    ))}
                  </ul>
                ) : (
                  <ItemAutocomplete productItem='No results' />
                )}
              </>
            )}
          </StyledAutocomplete>
        )}
      </div>
    </>
  );
};
