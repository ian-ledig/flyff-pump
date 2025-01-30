'use client';

import React, { useRef, useState, useEffect } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '../carousel-button/EmblaCarouselArrowButtons';
import './map.css';
import { FaBagShopping } from 'react-icons/fa6';
import { FaEuroSign, FaMap, FaPlayCircle } from 'react-icons/fa';

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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleVideoClick = (index: any) => setSelectedVideo(index);
  const handleImageClick = (index: number) => setSelectedImage(index);

  const closeModal = () => {
    setSelectedVideo(null);
    setSelectedImage(null);
  };

  // previous and next media
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevMedia();
      if (event.key === "ArrowRight") nextMedia();
      if (event.key === "Escape") closeModal();
    };

    if (selectedVideo !== null || selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo, selectedImage]);

  const prevMedia = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((prev: any) => (prev! > 0 ? prev! - 1 : prev));
    } else if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : prev));
    }
  };

  const nextMedia = () => {
    if (selectedVideo !== null) {
      setSelectedVideo((prev: any) => (prev! < videos.length - 1 ? prev! + 1 : prev));
    } else if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! < slides.length - 1 ? prev! + 1 : prev));
    }
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
              <div 
                className="embla__slide__img-wrapper relative cursor-pointer group"
                onClick={() => handleVideoClick(index)}
                aria-label={`Play video ${index}`}
              >
                <img
                  className="embla__slide__img"
                  src={`map/${prefix}/video/${index}.webp`}
                  alt={`${prefix} image number ${index}`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div 
                className="embla__slide__img-wrapper cursor-pointer"
                onClick={() => handleImageClick(index)}
                aria-label={`View image ${index}`}
              >
                <img
                  className="embla__slide__img"
                  src={`map/${prefix}/${index}.webp`}
                  alt={`${prefix} image ${index}`}
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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <button className="absolute left-5 text-white text-3xl" onClick={prevMedia} disabled={selectedVideo === 0}>
            left
          </button>
          <div className="relative">
            <video className="w-full max-w-4xl" controls autoPlay>
              <source src={`map/${prefix}/video/${selectedVideo}.mp4`} type="video/mp4" />
            </video>
            <button className="absolute top-3 right-3 text-white text-xl" onClick={closeModal}>
              ✕
            </button>
          </div>
          <button className="absolute right-5 text-white text-3xl" onClick={nextMedia} disabled={selectedVideo === videos.length - 1}>
            Right
          </button>
        </div>
      )}

      {/* Modal Image */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <button className="absolute left-5 text-white text-3xl" onClick={prevMedia} disabled={selectedImage === 0}>
            Left
          </button>
          <div className="relative p-4">
            <img
              className="max-w-full max-h-[80vh] rounded-lg transform scale-100"
              src={`map/${prefix}/${selectedImage}.webp`}
              alt={`${prefix} image ${selectedImage}`}
            />
            <button className="absolute top-3 right-3 text-white text-xl" onClick={closeModal}>
              ✕
            </button>
          </div>
          <button className="absolute right-5 text-white text-3xl" onClick={nextMedia} disabled={selectedImage === slides.length - 1}>
            Right
          </button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
