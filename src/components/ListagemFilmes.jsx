/* eslint-disable react/prop-types */
import Card from "./Card";

function ListagemFilmes({ Categoria, ListagemCards = [] }) {
  return (
    <div className="listagemFilmes">
      <h1>{Categoria}</h1>
      <div className="cards">
        {ListagemCards.map((card, index) => (
          <Card key={index} poster={card.poster} link={card.link} />
        ))}
      </div>
    </div>
  );
}

export default ListagemFilmes;
