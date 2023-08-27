import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { debounce } from '../../debounce/Debounce';
import { useSearchProducts } from '../../hooks/use-search-products/useSearchProducts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useOutsideClick } from '../../hooks/use-outside-click/useOutsideClick';

const StyledAutocomplete = styled.div`
  position: absolute;
  width: 400px;
  height: 350px;
  background-color: #ece6e6;
  border: 1px solid #ccc;
  border-radius: 3px;
  right: 0;
  overflow: auto;
  top: 53px;
  z-index: 9999;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }

  li:hover {
    background-color: #ccc;
  }

  a {
    text-transform: none;
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
`;

type AutoCompleteTypeInputDebounce = {
  label: string;
  id: string;
  category: string;
};

export const InputDebounce: FC = () => {
  const [input, setInput] = useState<string>('');

  const [item, setItem] = useState<string>('');
  const [isOpenAutocomplete, setIsOpenAutocomplete] = useState<boolean>(false);
  const debounceInputSearchProducts = debounce((inputValue: string) => {
    setItem(inputValue);
  }, 1000);

  const { productsList, status, error } = useSearchProducts(item);
  const { ref, isActive, setIsActive } = useOutsideClick(false);

  const handleAutocompleteClick = () => {
    setIsActive(!isActive);
  };

  const list: Readonly<AutoCompleteTypeInputDebounce[]> | undefined =
    productsList?.products.map((product) => {
      return {
        label: product.title,
        id: product.id.toString(),
        category: product.category as string,
      };
    });

  useEffect(() => {
    document.addEventListener('click', handleAutocompleteClick);
    return () => document.removeEventListener('click', handleAutocompleteClick);
  }, []);

  return (
    <>
        <div>
          {status === 'error' && <div>{error}</div>}
          <form>
            <input
              className='form-control'
              type='search'
              placeholder='Search products'
              value={input}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setIsOpenAutocomplete(true);
                setInput(event.target.value);
                debounceInputSearchProducts(event.target.value);
              }}
            />
          </form>
          {isActive &&  <div ref={ref}>
            {isOpenAutocomplete && (
              <>
                {!input && (
                  <StyledAutocomplete>
                    <li>Enter request</li>
                  </StyledAutocomplete>
                )}
                {status === 'loading' && (
                  <StyledAutocomplete>
                    <li>Loading...</li>
                  </StyledAutocomplete>
                )}
                {status === 'success' && (
                  <StyledAutocomplete>
                    {list ? (
                      <ul>
                        {list?.map(({ id, label, category }) => (
                          <Link to={`/${category}/${id}`} key={id}>
                            <li onClick={() => setInput(label)}>
                              {label.toUpperCase()}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    ) : (
                      <li>No results</li>
                    )}
                  </StyledAutocomplete>
                )}
              </>
            )}
          </div>}
        </div>
    </>
  );
};
