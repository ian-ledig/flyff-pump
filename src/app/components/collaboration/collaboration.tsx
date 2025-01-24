'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './collaboration.css';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const CollaborationComponent: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel(options, [autoplay]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                src={`collaboration/${index}.webp`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborationComponent;
