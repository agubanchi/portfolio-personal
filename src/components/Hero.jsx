import React from 'react'
import Avatar from '../assets/images/avatar.jpg';
import Curriculum from '../assets/CV-AgustinBanchi.pdf';

const Hero = () => {
  const social_media=[
    { name: "logo-linkedin", link: "https://www.linkedin.com/in/agustinbanchi/" },
    { name: "logo-github", link: "https://github.com/agubanchi" },
    { name: "logo-behance", link: "https://www.behance.net/agustinbanchi" },
 
  ];
  
  return (
    <section id='sobremi' className=' min-h-screen flex py-20 md:flex-row flex-col items-center'>
      <div className='flex-1 flex items-center justify-center h-full '>
        <img src={Avatar} alt="" className='w-1/2 rounded-full'/>
      </div>
      <div className='flex-1'>
        <div className="md:text-left text-center">
        <h1 className="text-withe md:text-5xl text-deepGreen dark:text-white   text-4xl font-bold  gap-x-4 pb-4 pt-5">
            Hola, soy <span>Agustin Banchi</span>
        </h1>
        <h2 className='text-withe  text-2xl dark:text-white'><span className='text-deepGreen font-bold'>+5 años de experiencia </span>trabajando como
diseñador multimedial & desarrollador
front-end en agencias de software y medios.
En constante aprendizaje de nuevas
tecnologías.
Mi objetivo es seguir desarrollándome
profesionalmente en el mundo IT. </h2>
<button type='download' className='text-white font-bold bg-deepGreen hover:text-white hover:bg-darkMode dark:hover:bg-white py-3 px-6 rounded-full  flex items-center gap-2 mt-6 md:mx-2 mx-auto'><a href={Curriculum} download=''>Descargar CV</a></button>
<div className='flex mt-8 text-3xl items-center md:justify-start justify-center gap-5 mx-2'>
{
  social_media.map(icon=>(
<div key={icon} className='text-deepGreen hover:text-darkMode dark:hover:text-white cursor-pointer'>
<a href={icon.link} target='_blank'> <ion-icon name={icon.name}></ion-icon> </a>
</div>
  ))
}
</div>
</div>
</div>

</section>
  )
}

export default Hero