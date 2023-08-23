import React, { FC } from 'react';
import { Carousel } from 'antd';

type CarouselComponentProps = {
  images: string[];
};
export const CarouselComponent: FC<CarouselComponentProps> = ({ images }) => {
  return (
    <Carousel dotPosition='left'>
      {images.map((image) => (
        <div>
          <img src={image} alt='image carousel' />
        </div>
      ))}
    </Carousel>
  );
};
