import React, { useEffect, useState } from "react";
import Changetheme from "./Changetheme";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "SOBRE MI", link: "#sobremi" },
    { name: "EXPERIENCIA", link: "#experiencia" },
    { name: "CONOCIMIENTOS", link: "#conocimientos" },
    { name: "PROYECTOS", link: "#proyectos" },
    { name: "CONTACTO", link: "#contacto" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`   fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-darkMode  text-darkMode shadow-md" : "dark:text-white text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7 z-[9999] flex gap-5 items-center">
        <h4 className={`md:text-4xl text-2xl uppercase font-bold dark:text-white ${
            open ? "text-gray-900" : ""
          }${sticky? "text-white":""}`}>
            Agustin<span className="text-deepGreen">Banchi</span>
          </h4>
          <Changetheme/>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-darkMode/0 bg-darkMode " : "bg-darkMode"
          } text-white md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-deepGreen">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
          
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[9999] dark:text-white text-deepGreen  ${
            open ? "text-deepGreen" : "text-deepGreen dark:text-white "
          } ${sticky?  " dark:text-white" :""}  text-3xl md:hidden m-5`}
        >{ open?
          <IoClose className="cursor-pointer z-[9999]"/>
        
         :
         <FaHamburger className={`cursor-pointer ${sticky ? "text-white" :""}`}/>
         }
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-full h-screen
      px-7 py-2 font-medium bg-white dark:bg-darkMode top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-deepGreen dark:text-white dark:hover:text-deepGreen"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;