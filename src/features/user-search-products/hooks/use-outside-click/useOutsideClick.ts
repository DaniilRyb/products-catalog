import { useState, useEffect, useRef } from 'react';

export const useOutsideClick = () => {
  const [isActive, setIsActive] = useState(false);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const refInput = useRef<HTMLInputElement | null>(null);

  const handleClick = (e) => {
    if (refInput.current?.contains(e.target)) {
      setIsActive(true);
    } else if (!refInput.current?.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return { refDiv, refInput, isActive };
};
