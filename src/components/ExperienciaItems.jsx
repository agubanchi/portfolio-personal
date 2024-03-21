import React from 'react'

const ExperienciaItems = ({ rolcompany, date, description, link }) => {
  return (
    <>
      <div className="absolute w-3 h-3 bg-deepGreen rounded-full mt-1.5 -start-1.5 border border-white dark:border-white dark:bg-deepGreen"></div>
      <time className="mb-1 text-sm font-bold leading-none text-gray-900 dark:text-white text-pretty">{rolcompany}</time>
      <h3 className="text-lg font-semibold text-deepGreen dark:text-white">{date}</h3>
      <p className="mb-4 text-base font-normal text-gray-90 dark:text-white">{description}</p>
      <a href={link} className="inline-flex items-center px-4 py-2 text-sm font-medium text-deepGreen bg-white border border-deepGreen rounded-lg hover:bg-deepGreen hover:text-white focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-deepGreen dark:bg-white dark:text-deepGreen dark:border-deepGreen dark:hover:text-white dark:hover:bg-deepGreen dark:focus:ring-gray-700">Visitar <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg></a>
    </>
  );
};

export default ExperienciaItems