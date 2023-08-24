"use client"

/**
 * Theme Switch Component
 * @function
 * @returns JSX
 */

import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Theme() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <li>
            <a title="Toggle Dark Mode" className="block pt-4 cursor-pointer hover:bg-transparent hover:opacity-75" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <i className="hidden dark:inline-flex dark:text-gray-300">
                    <FontAwesomeIcon icon={faMoon} />
                </i>
                <i className="dark:hidden inline-flex text-gray-600">
                    <FontAwesomeIcon icon={faSun} />
                </i>
            </a>
        </li>
    );
}