import React from 'react';
import BackButton from './BackButton';

const Header = ({ title, className }) => {
    return (
        <div className={`pb-2 ${className}`}>
            <div className={`text-2xl text-green-600 font-bold mb-4`}>
                {title}
            </div>
            <BackButton />
        </div>
    )
}

export default Header;