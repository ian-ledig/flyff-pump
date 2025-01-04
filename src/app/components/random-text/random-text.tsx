'use client';

import React, { useEffect, useState } from 'react';
import './random-text.css';

const words = [
  'website for your business?',
  'custom software?',
  'mobile application for IOS and Android?',
];

const RandomTextComponent: React.FC = () => {
  const [part, setPart] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    const speed = 80;
    const displayTime = 3000;

    if (!isFadingOut && offset < words[index].length) {
      const interval = setInterval(() => {
        setOffset((prevOffset) => prevOffset + 1);
      }, speed);
      return () => clearInterval(interval);
    } else if (offset >= words[index].length) {
      const displayTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, displayTime);
      return () => clearTimeout(displayTimeout);
    }
  }, [offset, isFadingOut, index]);

  useEffect(() => {
    if (isFadingOut) {
      const fadeTimeout = setTimeout(() => {
        setIsFadingOut(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setOffset(0);
      }, 1500);
      return () => clearTimeout(fadeTimeout);
    }
  }, [isFadingOut]);

  useEffect(() => {
    setPart(words[index].substring(0, offset));
  }, [offset, index]);

  return (
    <>
      Need a{' '}
      <span className={`fade-text ${isFadingOut ? 'fade-out' : ''}`}>
        {part}_
      </span>
    </>
  );
};

export default RandomTextComponent;
