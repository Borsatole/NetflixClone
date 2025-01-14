// import React from 'react'

import ListagemFilmesOriginais from "../components/CardsOriginais";
import FilmeTopoPagina from "../components/FilmeTopoPagina";
import ListagemFilmes from "../components/ListagemFilmes";

function Content() {
  return (
    <div>
      <FilmeTopoPagina />

      <section>
        <ListagemFilmes
          Categoria="Recomendados para você"
          ListagemCards={[
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard6.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard7.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard8.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard9.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard10.png",
              link: "#",
            },
          ]}
        />

        <ListagemFilmes
          Categoria="Adicionados recentemente"
          ListagemCards={[
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard11.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard12.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard13.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard14.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard15.png",
              link: "#",
            },
          ]}
        />

        <ListagemFilmesOriginais
          Categoria={"Originais Netflix"}
          ListagemCards={[
            {
              poster:
                "public/images/cards-original-netflix/MovieVerticalCard1.png",
              link: "#",
            },
            {
              poster:
                "public/images/cards-original-netflix/MovieVerticalCard2.png",
              link: "#",
            },
            {
              poster:
                "public/images/cards-original-netflix/MovieVerticalCard3.png",
              link: "#",
            },
            {
              poster:
                "public/images/cards-original-netflix/MovieVerticalCard4.png",
              link: "#",
            },
            {
              poster:
                "public/images/cards-original-netflix/MovieVerticalCard1.png",
              link: "#",
            },
            {
              poster:
                "public/images/cards-original-netflix/MovieVerticalCard2.png",
              link: "#",
            },
            {
              poster:
                "public/images/cards-original-netflix/MovieVerticalCard3.png",
              link: "#",
            },
            {
              poster:
                "public/images/cards-original-netflix/MovieVerticalCard4.png",
              link: "#",
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Content;
