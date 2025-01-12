/* eslint-disable react/prop-types */
import Card from "./Card";

function ListagemFilmes(props) {
  return (
    <div className="listagemFilmes">
      <h1>{props.Categoria}</h1>

      <div className="cards">
        <Card
          poster="public\images\cards-filmes\MovieHorizontalCard.png"
          link="#"
        />

        <Card
          poster="public\images\cards-filmes\MovieHorizontalCard2.png"
          link="#"
        />

        <Card
          poster="public\images\cards-filmes\MovieHorizontalCard3.png"
          link="#"
        />

        <Card
          poster="public\images\cards-filmes\MovieHorizontalCard4.png"
          link="#"
        />

        <Card
          poster="public\images\cards-filmes\MovieHorizontalCard5.png"
          link="#"
        />
      </div>
    </div>
  );
}

export default ListagemFilmes;
