// import React from 'react'

import MenuOptions from "../components/MenuOptions";
import SearchBar from "../components/SearchBar";
import "./css/Header.css";

function Header() {
  return (
    <header>
      <div className="HeaderLeft">
        <img
          src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/NetflixLogoSvg.svg"
          alt=""
        />

        <menu>
          <ul>
            <MenuOptions />
          </ul>
        </menu>
      </div>

      <div className="HeaderRight">
        <ul>
          {/* <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/icons/Search.svg" alt="" width={20} /> */}

          <SearchBar />

          <li>
            <img
              src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/icons/GiftBox.svg"
              alt=""
              width={20}
            />
          </li>

          <li>
            <img
              src="https://raw.githubusercontent.com/Borsatole/NetflixClone/3c1209eac7cbab07f300cc04832790bfa909ef02/public/images/icons/NotificationBell.svg"
              alt=""
              width={20}
            />
          </li>

          <li>
            <img src="\images\icons\Img&Dropdown.svg" alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
