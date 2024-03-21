import { skills } from '../data/skills.js';
const Conocimientos = () => {
  return (
    <section id="conocimientos" className='md:py-20 mx-auto'>
      <div className="container px-5  mx-auto">
        <div className="text-center mb-20">
         
          <h1 className="sm:text-5xl text-3xl font-bold text-deepGreen  dark:text-white mb-4">
            Habilidades y Tecnologías
          </h1>
        
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-darkMode dark:bg-deepGreen dark:text-white text-green-600 text-lg rounded flex p-4 h-full items-center gap-4">
              <skill.icon />
                <span className="title-font font-medium text-white">
                  {skill.skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conocimientos;
