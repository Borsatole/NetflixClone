import "../layouts/css/OriginalNetflix.css";
/* eslint-disable react/prop-types */

function CardOriginal({ poster, link }) {
  return (
    <div className="cardOriginal">
      <a href={link}>
        <img src={poster} alt="" />
      </a>
    </div>
  );
}

function ListagemFilmesOriginais({ Categoria, ListagemCards = [] }) {
  return (
    <div className="originalNetflix">
      <h1>{Categoria}</h1>
      <div className="OriginalNetflixcard">
        <div className="cards">
          {ListagemCards.map((card, index) => (
            <CardOriginal key={index} poster={card.poster} link={card.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListagemFilmesOriginais;
