import React from 'react'
import { useEffect,useState } from 'react'
import {FaMoon} from 'react-icons/fa';
import {BsSunFill} from 'react-icons/bs';
const Changetheme = () => {
    const [darkMode,setDarkMode] = useState(true);

    useEffect(()=>{
        const theme = localStorage.getItem('theme');
        if(theme === "dark") setDarkMode(true);
    },[])

useEffect(()=>{
document.querySelector('html').classList.toggle('dark')
},[darkMode])

  return (
    <div className='relative flex w-16 h-8 items-center dark:bg-green-900 bg-green-900 cursor-pointer rounded-full p-1' onClick={()=> setDarkMode(!darkMode)}>

        <FaMoon className='text-white ' size={18}/>
<div className='absolute bg-white dark:bg-green-400 w-6 h-6 rounded-full shadow-md transition-transform duration-300 ' style={darkMode?{left:'2px',bottom:'4px'}:{right:'2px',bottom:'4px'}}>
</div>
<BsSunFill className='ml-auto text-white ' size={18} 
/>
    </div>
  )
}

export default Changetheme