import React, { FC } from 'react';
import { Carousel } from 'antd';

type CarouselComponentProps = {
  images: string[];
};
export const CarouselComponent: FC<CarouselComponentProps> = ({ images }) => {
  return (
    <Carousel dotPosition='left' autoplay={true}>
      {images.map((image) => (
        <div>
          <img src={image} alt={`image ${image}`} />
        </div>
      ))}
    </Carousel>
  );
};
