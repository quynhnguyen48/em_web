import React, { useState } from 'react';

const Accordion = ({ title, content }:{title: any, content: any}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title p-5 border-solid border-2 border-black -mt-0.5 text-left" onClick={() => setIsActive(!isActive)}>
        <div><span>{isActive ? 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
      
 : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>
}</span><span className='ml-3'>{title}</span></div>
      </div>
      {isActive && <div className="accordion-content p-5 -mt-0.5 border-solid border-2 border-black">{content}</div>}
    </div>
  );
};

export default Accordion;