import React from 'react';
import BackButton from './BackButton';

const Header = ({ title }) => {
    return (
        <>
            <div className="text-2xl text-green-600 font-bold mb-8">
                {title}
            </div>
            <BackButton />
        </>
    )
}

export default Header;