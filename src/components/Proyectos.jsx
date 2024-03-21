import React from 'react'
import { projects } from '../data/Projects.js';



const Proyectos = () => {
    

  
  return (
    <div id='proyectos' className=' md:py-20 mx-auto'>
 <div className="text-center">
         
         <h1 className="dark:text-white text-deepGreen md:text-5xl text-center   text-4xl font-bold  gap-x-4 pb-4 pt-10">
           Proyectos
         </h1>
       
       </div>
       <div className='mt-12  mx-auto '>
       {projects.map((projects, index) => (
            <>
            <div className=' md:flex w-4/5 mx-auto p-2 h-full'>
            <div key={index} className="p-2 sm:w-1/2 w-full ">

           <img className='object-cover object-top w-full h-56 transition duration-500 sm:h-full hover:scale-90 rounded' src={projects.image} alt={projects.title} />

         </div><div className="p-3 sm:w-1/2 w-full ">
<h1 className='text-deepGreen dark:text-white text-2xl font-bold'>{projects.title}</h1>
<p className='mb-4 text-base font-normal dark:text-white text-gray-900 '>{projects.description}</p>
<div className=' flex gap-3 md:mx-auto'>
  <span className='border-2 border-deepGreen rounded px-2 py-2 flex justify-center items-center gap-2 text-gray-900 dark:text-white'><projects.icon01/>{projects.icon01_name}</span>
  <span className='border-2 border-deepGreen rounded px-2 py-2 flex justify-center items-center gap-2 text-gray-900 dark:text-white'><projects.icon02/>{projects.icon02_name}</span>
</div>
<div className=' md:flex  py-2 flex gap-3'>
{projects.code && (
            <button className='my-6 px-0 gap-2'><a href={projects.code} target='_blank' className="px-4 h-6 w-6 bg-deepGreen p-3 rounded hover:bg-darkMode dark:hover:bg-white dark:hover:text-deepGreen text-white d-flex"> <ion-icon name="logo-github"></ion-icon> Proyecto</a></button>)}
            
            <button className='my-6 px-0 gap-2'><a href={projects.link} target='_blank' className="px-4 h-6 w-6 bg-deepGreen p-3 rounded hover:bg-darkMode dark:hover:bg-white dark:hover:text-deepGreen text-white d-flex"> <ion-icon name="link-outline"></ion-icon> Preview</a></button>
           </div>
           </div>
           
           </div>
           
           </>
           
          ))}
       </div>
      
       <div className="text-center mt-8">
           <button><a href="https://www.behance.net/agustinbanchi" target='_blank' className="px-4 h-6 w-6 bg-deepGreen p-3 rounded hover:bg-darkMode dark:hover:bg-white dark:hover:text-deepGreen text-white d-flex"> Ver mas proyectos</a></button></div>
      
    </div>
    
  )
}

export default Proyectos