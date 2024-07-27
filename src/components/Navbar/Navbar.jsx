import React from 'react';

const Navbar = () => {
    const NavULlliData = ["Yangiliklar", "Jamiyat", "Jaxon Yangiliklari", "OAB Haqida", "Aloqa"]
    return (
        <div className='stylenav'>
            <div className='navbar'>
                <div className='navbar_right'>
                    <img className='navbar_img' src="./image/logo.svg" alt="Namangan.uz" />
                </div>
                <div>
                    <ul className='navbar_mid_ullli'>
                        {
                            NavULlliData.map((item, index) => {
                                return <li className='navbar_mid_ullli_liay' key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='nav_inout'>
                    <input className='nav_inout_search' placeholder='Qidirish....' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
