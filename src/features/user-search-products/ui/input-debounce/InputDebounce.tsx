import React, { ChangeEvent, FC, useState } from 'react';
import { debounce } from '../../debounce/Debounce';
import { useSearchProducts } from '../../use-search-products/useSearchProducts';

export const InputDebounce: FC = () => {
  const [input, setInput] = useState<string>('');

  const debounceInputSearchProducts = debounce((inputValue: string) => {
    setInput(inputValue);
    console.log('input', input);
  }, 1000);

  const { productsList, status, error } = useSearchProducts(input);
  return (
    <div>
      <input
        className='form-control me-2'
        type='search'
        placeholder='Поиск'
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          debounceInputSearchProducts(event.target.value);
        }}
      />
      {status === 'error' && <div>{error}</div>}
      {status === 'success' && (
        <>
          <ul className='position-absolute'>
            {productsList ? (
              productsList.products.map((product) => <li>{product.title}</li>)
            ) : (
              <></>
            )}
          </ul>
        </>
      )}
    </div>
  );
};
