'use client';

import React, { useState } from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import './faq-card.css';

type PropType = {
  question: string;
  answer: string;
};

const FaqCardComponent: React.FC<PropType> = (props) => {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='faq-card' onClick={() => setIsOpen(!isOpen)}>
        <div className='faq-question font-semibold'>
            {question}
            {isOpen ? <FaAngleDoubleUp className='icon' /> : <FaAngleDoubleDown className='icon' />}
        </div>
        {isOpen && (
            <div className='faq-answer'>{answer}</div>
        )}
    </div>
  );
};

export default FaqCardComponent;
