'use client';

import React from 'react';
import Image from 'next/image';
import './collaboration.css';

const CollaborationComponent: React.FC = () => {
  return (
    <div className="collaboration">
      <div className="collaboration-items">
        <div>
          <Image
            src="/collaboration/alysiaonline.webp"
            alt="Alysia Online logo"
            loading="lazy"
            width={200}
            height={0}
          />
        </div>
        <a
          href="https://forsaken-kingdom.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/collaboration/forsakenflyff.webp"
            alt="Forsaken Kindgdom logo"
            loading="lazy"
            width={200}
            height={0}
          />
        </a>
        <a href="https://moonflyff.fr/" target="_blank" rel="noreferrer">
          <Image
            src="/collaboration/moonflyff.webp"
            alt="Moon Flyff logo"
            loading="lazy"
            width={300}
            height={0}
          />
        </a>
        {/* second */}
        <div>
          <Image
            src="/collaboration/alysiaonline.webp"
            alt="Alysia Online logo"
            loading="lazy"
            width={200}
            height={0}
          />
        </div>
        <a
          href="https://forsaken-kingdom.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/collaboration/forsakenflyff.webp"
            alt="Forsaken Kindgdom logo"
            loading="lazy"
            width={200}
            height={0}
          />
        </a>
        <a href="https://moonflyff.fr/" target="_blank" rel="noreferrer">
          <Image
            src="/collaboration/moonflyff.webp"
            alt="Moon Flyff logo"
            loading="lazy"
            width={300}
            height={0}
          />
        </a>
      </div>
    </div>
  );
};

export default CollaborationComponent;
