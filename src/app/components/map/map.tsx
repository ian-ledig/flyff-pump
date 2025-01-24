'use client';

import React, { useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '../carousel-button/EmblaCarouselArrowButtons';
import './map.css';
import { FaBagShopping } from 'react-icons/fa6';
import { FaEuroSign, FaMap } from 'react-icons/fa';

type PropType = {
  name: string;
  description: string;
  price: number;
  count: number;
  maxCount: number;
  slides: number[];
  options?: EmblaOptionsType;
};

const MapComponent: React.FC<PropType> = (props) => {
  const { name, description, price, count, maxCount, slides, options } = props;
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className='map-info-container'>
        <div className='map-info-item'>
          <h3 className='title-2 font-semibold'>{ name }</h3>
          <FaMap
              size={26}
              className='mt-3 ml-3'
              style={{ color: 'var(--secondary)' }}
          />
        </div>
        <div className='map-info-item'>
          <h4 className='title-2 font-semibold'>{ count } / { maxCount }</h4>
          <FaBagShopping
              size={26}
              className='mt-3 ml-3'
              style={{ color: 'var(--secondary)' }}
          />
        </div>
        <div className='map-info-item'>
          <h4 className='title-2 font-semibold'>{ price }</h4>
          <FaEuroSign
              size={26}
              className='mt-3'
              style={{ color: 'var(--secondary)' }}
          />
        </div>
      </div>
      <div className='pb-3.5 pl-32 italic text-slate-600'>
        { description }
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__img-wrapper">
                <img
                  className="embla__slide__img"
                  src={`https://picsum.photos/600/350?v=${index}`}
                  alt="Your alt text"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress embla__progress--hidden">
          <div className="embla__progress__bar" ref={progressNode} />
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
