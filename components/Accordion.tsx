import React, { useState } from 'react';

const Accordion = ({ id, title, content, active, setActive, }:{id: any, title: any, content: any, active:any, setActive: any}) => {
  const isActive = id == active;
  return (
    <div className="accordion-item">
      <div className="accordion-title p-2 border-solid border-2 border-black -mt-0.5 text-left text-sm font-medium" onClick={() => setActive(id)}>
        <div><span>{isActive ? 
        <svg className="w-3 h-3 inline" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" viewBox="0 0 330.002 330.002" xmlSpace="preserve">
        <path id="XMLID_23_" d="M329.155,100.036c-2.108-6.011-7.784-10.035-14.154-10.035h-300c-6.371,0-12.046,4.024-14.154,10.035  c-2.109,6.011-0.19,12.699,4.784,16.678l150.004,120c2.739,2.191,6.055,3.287,9.37,3.287c3.316,0,6.631-1.096,9.371-3.287  l149.996-120C329.346,112.734,331.264,106.047,329.155,100.036z"/>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
      
 : 
 <svg className="w-3 h-3 inline"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="7px" version="1.1" viewBox="0 0 10 7" width="10px"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-553.000000, -9.000000)"><g id="arrow-drop-up" transform="translate(553.000000, 9.500000)"><path d="M0,5 L5,0 L10,5 L0,5 Z" id="Shape"/></g></g></g></svg>
}</span><span className='ml-3'>{title}</span></div>
      </div>
      {isActive && <div className="accordion-content text-left p-5 -mt-0.5 border-solid border-2 border-black text-sm">{content}</div>}
    </div>
  );
};

export default Accordion;