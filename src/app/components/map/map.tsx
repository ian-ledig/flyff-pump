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
import {
  FaEuroSign,
  FaMap,
  FaPlayCircle,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

type PropType = {
  prefix: string;
  name: string;
  description: string;
  price: number;
  count: number;
  maxCount: number;
  slides: number[];
  videos: string[];
  options?: EmblaOptionsType;
};

const MapComponent: React.FC<PropType> = (props) => {
  const {
    prefix,
    name,
    description,
    price,
    count,
    maxCount,
    slides,
    videos,
    options,
  } = props;
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const mediaList: any = [
    ...videos.map((id) => ({ type: 'video', id })),
    ...slides.map((s) => ({ type: 'image', index: s })),
  ];

  const openModal = (type: 'video' | 'image', idOrIndex: string | number) => {
    const mediaIndex = mediaList.findIndex(
      (item: any) =>
        item.type === type &&
        (item.id === idOrIndex || item.index === idOrIndex)
    );
    if (mediaIndex !== -1) {
      setSelectedIndex(mediaIndex);
    }
  };

  const closeModal = () => setSelectedIndex(null);

  const prevMedia = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev! > 0 ? prev! - 1 : mediaList.length - 1
      );
    }
  };

  const nextMedia = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev! < mediaList.length - 1 ? prev! + 1 : 0
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') prevMedia();
      if (event.key === 'ArrowRight') nextMedia();
      if (event.key === 'Escape') closeModal();
    };

    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <div className="embla">
      <div className="map-info-container">
        <div className="map-info-item">
          <h3 className="title-2 font-semibold">{name}</h3>
          <FaMap
            size={26}
            className="mt-3 ml-3"
            style={{ color: 'var(--icon)' }}
          />
        </div>
        <div className="map-info-item">
          <h4 className="title-2 font-semibold">
            {count} / {maxCount}
          </h4>
          <FaBagShopping
            size={26}
            className="mt-3 ml-3"
            style={{ color: 'var(--icon)' }}
          />
        </div>
        <div className="map-info-item">
          <h4 className="title-2 font-semibold">{price}</h4>
          <FaEuroSign
            size={26}
            className="mt-3"
            style={{ color: 'var(--icon)' }}
          />
        </div>
      </div>
      <div className="description">{description}</div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {videos.map((id) => (
            <div className="embla__slide" key={id}>
              <div
                className="embla__slide__img-wrapper relative cursor-pointer group"
                onClick={() => openModal('video', id)}
                aria-label={`Play YouTube video ${id}`}
              >
                <img
                  className="embla__slide__img object-cover w-full h-full scale-125"
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt={`Video thumbnail for ${id}`}
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
                onClick={() => openModal('image', index)}
                aria-label={`View image ${prefix} number ${index}`}
              >
                <img
                  className="embla__slide__img"
                  src={`map/${prefix}/${index}.webp`}
                  alt={`${prefix} number ${index}`}
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

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute left-16 text-white text-3xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              prevMedia();
            }}
          >
            <FaChevronLeft />
          </button>

          <div
            className="relative p-4 w-[90vw] max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            {mediaList[selectedIndex].type === 'video' ? (
              <div className="relative w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${mediaList[selectedIndex].id}?autoplay=1&vq=hd1080`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img
                className="max-w-full max-h-[90vh] rounded-lg transform scale-100"
                src={`map/${prefix}/${mediaList[selectedIndex].index}.webp`}
                alt={`Image ${mediaList[selectedIndex].index}`}
              />
            )}
            <button
              className="absolute top-8 right-8 text-white text-2xl bg-black bg-opacity-50 p-2 rounded-full"
              onClick={closeModal}
            >
              <FaTimes size={24} />
            </button>
          </div>

          <button
            className="absolute right-16 text-white text-3xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              nextMedia();
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
