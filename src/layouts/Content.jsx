// import React from 'react'

import FilmeTopoPagina from "../components/FilmeTopoPagina";
import ListagemFilmes from "../components/ListagemFilmes";

function Content() {
  return (
    <div>
      <FilmeTopoPagina />

      <section>
        <ListagemFilmes Categoria="Outros Filmes" />
      </section>
    </div>
  );
}

export default Content;
