import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Pagination() {
  return (
    <div className='bg-red-600 p-4 mt-8 flex justify-center text-white gap-6 rounded-xl items-center'>
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Next Page</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );
}

export default Pagination;
