import React, { useState} from 'react';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

interface HeaderProps {
    handleToggleDarkMode: (callback: (previousDarkMode: boolean) => boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleDarkMode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setIsDarkMode((previousDarkMode) => {
            const newDarkMode = !previousDarkMode;
            handleToggleDarkMode(() => newDarkMode);
            return newDarkMode;
        });
    };

    return (
        <div className='header'>
            <h1>Notes</h1>
            <div onClick={toggleDarkMode} className='toggle-icon'>
                {isDarkMode ? <FaToggleOn size={30} color='white'/> : <FaToggleOff size={30} />}
            </div>
        </div>
    );
};

export default Header;
