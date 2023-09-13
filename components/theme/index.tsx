"use client"

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { ToggleSwitch } from 'flowbite-react';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState<boolean>(false);
    
    const toggleTheme = () => {
        if(theme === "dark"){
            setTheme('light');
            setIsDark(false);
        } else {
            setTheme('dark');
            setIsDark(true);
        }
    };
    
    useEffect(() => {
        if(theme === "dark"){
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, []);
    

return (
    <div>
      <ToggleSwitch
        label="Toggle Dark Mode"
        checked={isDark}
        onChange={toggleTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;