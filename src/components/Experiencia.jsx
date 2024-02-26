import React from 'react'
import ExperienciaItems from './ExperienciaItems'

const Experiencia = () => {
  const experience = [{
    rolcompany:'Desarrollador FrontEnd - UO Solutions',
    date:'Enero 2023 - Actualidad',
    description:`Maquetado de paginas web mediante el uso de Wordpress.
    (DIVI, Elementor, Woocomerce).
    Maquetado responsive de Sitios web. (HTML,CSS, Javascript, React.js).
    Uso de Git/GitLab.
    Maquetado de email marketing.`,
    link:'https://www.uosolutions.com/'

  },{
    rolcompany:'Maquetador Web Semi sr. - RAPP Argentina',
    date:'Abril 2021 - Mayo 2022',
    description:`Maquetado responsive de emails marketing bajo los estándares correspondientes para
    los diversos servicios de correos electrónicos (gmail, Outlook, Yahoo, etc).
    Animación de banners HTML5.
    Diseño de piezas gráficas en gral.
    Maquetado de Landing Pages.`,
    link:'https://www.rapp.com/'

  },{
    rolcompany:'Diseñador Multimedial (freelance) - Noi Creatives',
    date:'Abril 2019 - Marzo 2021',
    description:`Diseño y desarrollo de Sitios web de carácter Profesional, Institucional, E-Commerce,
    para Pymes y pequeñas empresas .
    Diseño y desarrollo de Templates HTML.
    Diseño de Email marketing.
    Diseño y comunicación para Redes Sociales.`,
    link:'http://www.noicreatives.com/'

  },{
    rolcompany:'Design & Coding - Beyond Media Agency',
    date:'Septiembre 2017 - Febrero 2020',
    description:`Diseño y desarrollo de Sitios web de carácter Profesional, Institucional, E-Commerce, para Pymes y pequeñas empresas.
    Diseño y desarrollo de Templates HTML.
    Diseño de Email marketing.
    Diseño y comunicación para Redes Sociales.`,
    link:'https://beyondagency.ai/'

  }
  ,{
    rolcompany:'Desarrollador UI/UX & Web JR - Perception Group',
    date:'Diciembre 2016 - Agosto 2017',
    description:`Diseño De Sitios Web empresariales, landing pages. Implementación de mejoras tanto Gráficas, como así también de contenidos.
    Elaboración de prototipos bajo lenguaje de programación (HTML5, CSS3, JAVASCRIPT, BOOTSTRAP, USER EXPERIENCE).`,
    link:'http://www.perceptiongrp.com/'

  },
  {
    rolcompany:'Diseño & Community - Atomika',
    date:'Octubre 2015 - Enero 2016',
    description:`Diseño y desarrollo anuncios publicitarios profesionales (Banner Ads).
    Actualizaciones de contenido en páginas web, Landing Pages.
    Armado de Piezas Gráficas para Redes Sociales.
    Diseño y Puesta en función de Plantillas para Mercadolibre.`,
    link:'https://www.atomika.net/es/'

  }]
  return (
    <>
    <div id='experiencia' className="flex-1 w-3/4   md:py-10 items-center mx-auto">
    <h1 className="text-withe md:text-5xl text-center   text-4xl font-bold  gap-x-4 pb-4 pt-5">
            Experiencia
        </h1>
        <div className='w-3/4'>
          
<ol className="relative border-s border-green-200 dark:border-gray-700 ">  
{
  experience.map(experience=>(
    <li className="mb-10 ms-4" key={experience.description}>
                <ExperienciaItems {...experience} />
    </li>
  ))
}                
    
</ol>


        </div>
    </div>
    </>
  )
}

export default Experiencia