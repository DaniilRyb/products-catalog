import React, { ChangeEvent, FC, useState } from 'react';
import { debounce } from '../../debounce/Debounce';
import { useSearchProducts } from '../../hooks/use-search-products/useSearchProducts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useOutsideClick } from '../../hooks/use-outside-click/useOutsideClick';
import { Spinner } from 'react-bootstrap';
import { ItemAutocomplete } from '../item-autocomplete/ItemAutocomplete';

const StyledAutocomplete = styled.div`
  position: absolute;
  width: 350px;
  height: 450px;
  background-color: #ece6e6;
  border: 1px solid #ccc;
  border-radius: 3px;
  right: 0;
  overflow: auto;
  top: 53px;
  z-index: 10;
  color: #000;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-transform: none;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
`;

export const InputDebounce: FC = () => {
  const [input, setInput] = useState<string>('');
  const [item, setItem] = useState<string>('');

  const debounceInputSearchProducts = debounce(
    (inputValue: string) => setItem(inputValue),
    1000,
  );

  const { productsList, status, error } = useSearchProducts(item);

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
            type='search'
            placeholder='Search products...'
            value={input}
            ref={refInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value);
              debounceInputSearchProducts(e.target.value);
            }}
          />
        </form>
        {isActive && (
          <StyledAutocomplete ref={refDiv}>
            {status === 'loading' && (
              <div className='d-flex flex-wrap'>
                <div>
                  <p>Loading...</p>
                </div>
                <Spinner />
              </div>
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
                  <ItemAutocomplete productItem={'No results'} />
                )}
              </>
            )}
          </StyledAutocomplete>
        )}
      </div>
    </>
  );
};
