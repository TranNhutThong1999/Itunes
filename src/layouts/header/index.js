import React from 'react';
import Logo from '../../assets/images/logo.jpg'

const Header = () => {
    return (
        <header style={{height: 80, width: '100%', backgroundColor: '#6e6c6c', display:'flex', alignItems:'center'}}>
            <img src={Logo} style={{marginLeft: 20}} height={'100%'} alt="itunes" />
        </header>
    );
};

export default Header;