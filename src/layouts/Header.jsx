// import React from 'react'
import HamburgerMenu from '../components/HamburguerMenu';
import MenuOptions from '../components/MenuOptions';
import SearchBar from '../components/SearchBar';
import './css/Header.css';

function Header() {
  return (
    <header>

        <div className='HeaderLeft'>

            <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/NetflixLogoSvg.svg" alt="" />

            <menu>
                <ul>
                    <MenuOptions/>
                </ul>
            </menu>

        </div>

        <div className='HeaderRight'>

                <ul>
                    {/* <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/icons/Search.svg" alt="" width={20} /> */}

                    <SearchBar/>

                    <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/icons/%C3%87OCUK.svg" alt="" />

                    <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/icons/GiftBox.svg" alt="" width={20}/>

                    <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/icons/NotificationBell.svg" alt="" width={20}/>

                    <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/icons/Img%26Dropdown.svg" alt="" />
                    
                </ul>

            <HamburgerMenu/>
                
            
        </div>




    </header>
  )
}

export default Header