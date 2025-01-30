'use client';

import React, { useRef, useState } from 'react';
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
  prefix: string;
  name: string;
  description: string;
  price: number;
  count: number;
  maxCount: number;
  slides: number[];
  videos: number[];
  options?: EmblaOptionsType;
};

const MapComponent: React.FC<PropType> = (props) => {
  const { prefix, name, description, price, count, maxCount, slides, videos, options } = props;
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (index: any) => {
    setSelectedVideo(index);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

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
          {videos.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__img-wrapper cursor-pointer" onClick={() => handleVideoClick(index)}>
                <img
                  className="embla__slide__img"
                  src={`map/${prefix}/video/${index}.jpg`}
                  alt={`${prefix} image number ${index}`}
                />
              </div>
            </div>
          ))}
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__img-wrapper">
                <img
                  className="embla__slide__img"
                  src={`map/${prefix}/${index}.jpg`}
                  alt={`${prefix} image number ${index}`}
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

      {selectedVideo !== null && (
        <div className="video-modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20" onClick={closeModal}>
          <div className="video-wrapper relative" onClick={(e) => e.stopPropagation()}>
            <video className="w-full max-w-4xl" controls autoPlay>
              <source src={`map/${prefix}/video/${selectedVideo}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="absolute top-3 right-3 text-white text-xl" onClick={closeModal}>
              ✕
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
