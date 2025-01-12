import React from "react";

function ListagemFilmes() {
  return (
    <div className="listagemFilmes">
      <h1>Filmes Populares</h1>

      <div className="cards">
        <div className="card">
          <img
            src="public\images\cards-filmes\MovieHorizontalCard.png"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="public\images\cards-filmes\MovieHorizontalCard.png"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="public\images\cards-filmes\MovieHorizontalCard.png"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="public\images\cards-filmes\MovieHorizontalCard.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ListagemFilmes;
