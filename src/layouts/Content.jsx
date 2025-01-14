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
              poster: "/images/cards-original-netflix/MovieVerticalCard1.png",
              link: "#",
            },
            {
              poster: "/images/cards-original-netflix/MovieVerticalCard2.png",
              link: "#",
            },
            {
              poster: "/images/cards-original-netflix/MovieVerticalCard3.png",
              link: "#",
            },
            {
              poster: "/images/cards-original-netflix/MovieVerticalCard4.png",
              link: "#",
            },
            {
              poster: "/images/cards-original-netflix/MovieVerticalCard1.png",
              link: "#",
            },
            {
              poster: "/images/cards-original-netflix/MovieVerticalCard2.png",
              link: "#",
            },
            {
              poster: "/images/cards-original-netflix/MovieVerticalCard3.png",
              link: "#",
            },
            {
              poster: "/images/cards-original-netflix/MovieVerticalCard4.png",
              link: "#",
            },
          ]}
        />

        <ListagemFilmes
          Categoria="Assista Novamente"
          ListagemCards={[
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard16.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard17.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard18.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard19.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard16.png",
              link: "#",
            },
          ]}
        />
        <ListagemFilmes
          Categoria="Em breve"
          ListagemCards={[
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard21.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard22.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard23.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard24.png",
              link: "#",
            },
            {
              poster: "\\images\\cards-filmes\\MovieHorizontalCard25.png",
              link: "#",
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Content;
