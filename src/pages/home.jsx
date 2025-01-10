// import React from 'react';
// import { Link } from 'react-router-dom';
import Content from '../layouts/Content';
import Header from '../layouts/Header';

const Home = () =>{
  return (
    <div>
      <Header/>
      <Content/>
      {/* <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Home;