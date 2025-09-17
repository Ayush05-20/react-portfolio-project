import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const sortedTheme = localStorage.getItem("theme")
        if (sortedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }
        else{
            localStorage.setItem("theme","light");
            setIsDarkMode(false)
        }
    },[])

    const toggleTheme = ()=>{
        if (isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }
        else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
            setIsDarkMode(true)
        }
    }
  return (
    <button onClick={toggleTheme} className= {cn("fixed max-sm:hidden rounded-full right-5 z-50 p-2 transition-colors duration-300",
        "cursor-pointer hover:scale-110 focus:outline-none"
    )}>
        {" "}
        {isDarkMode ?
         (<Sun className='h-6 w-6 text-yellow-300'/>):
        (<Moon className='h-6 w-6 text-blue-700'/>)}
    </button>
  )
}

export default ThemeToggle