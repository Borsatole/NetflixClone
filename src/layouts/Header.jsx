// import React from 'react'
import HamburgerMenu from '../components/HamburguerMenu';
import MenuOptions from '../components/MenuOptions';
import './css/Header.css';

function Header() {
  return (
    <header>

        <div className='HeaderLeft'>

            <img src="public\images\NetflixLogoSvg.svg" alt="" />

            <menu>
                <ul>
                    <MenuOptions/>
                </ul>
            </menu>

        </div>

        <div className='HeaderRight'>

                <ul>
                    <img src="public\images\icons\search.svg" alt="" width={20} />
                    <img src="public\images\icons\ÇOCUK.svg" alt="" />
                    <img src="public\images\icons\GiftBox.svg" alt="" width={20}/>
                    <img src="public\images\icons\NotificationBell.svg" alt="" width={20}/>
                    <img src="public\images\icons\Img&Dropdown.svg" alt="" />
                    
                </ul>

            <HamburgerMenu/>
                
            
        </div>




    </header>
  )
}

export default Header