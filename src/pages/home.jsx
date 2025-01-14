import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import Content from "../layouts/Content";
import Header from "../layouts/Header";
import Loader from "../components/Loader";
import Footer from "../layouts/Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = async () => {
      setTimeout(() => setIsLoading(false), 1000);
    };

    // Verifica se a página já foi completamente carregada
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      // Adiciona o evento para detectar quando a página termina de carregar
      window.addEventListener("load", handlePageLoad);

      // Limpa o evento ao desmontar o componente
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader /> // Exibe o componente Loader enquanto está carregando
      ) : (
        <>
          <Header />

          <Content />

          <Footer />

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
        </>
      )}
    </div>
  );
};

export default Home;
