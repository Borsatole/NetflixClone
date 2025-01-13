// import React from 'react'
import "../layouts/css/FilmeTopoPagina.css";
import ListagemFilmes from "./ListagemFilmes";

function FilmeTopoPagina() {
  return (
    <section className="movie">
      <div className="movieInfo">
        <img
          src="https://raw.githubusercontent.com/Borsatole/NetflixClone/refs/heads/main/public/images/MovieName.png"
          alt=""
        />

        <section>
          <div className="RankIconText">
            <img
              src="https://raw.githubusercontent.com/Borsatole/NetflixClone/2d4e25b437618442dbe0054ec1fbea31c975baff/public/images/icons/Top10Badge.svg"
              alt=""
              width={32}
            />
            <span>Hoje o número 4 é a Turquia</span>
          </div>

          <div className="movieDescription">
            <p>
              Emir, que aprendeu a se defender ainda jovem e alcançou uma
              posição importante no mundo dos negócios trabalhando duro, um dia
              conhece uma cantora de rua e sua vida muda.
            </p>
          </div>

          <div className="buttons">
            <a href="#">
              <div>
                <img
                  src="https://raw.githubusercontent.com/Borsatole/NetflixClone/8d1731702ab8bf26466d99a38b6374da9deb5c82/public/images/icons/Play.svg"
                  alt=""
                />
                Play
              </div>
            </a>

            <a href="#">
              <div>
                {" "}
                <img
                  src="https://raw.githubusercontent.com/Borsatole/NetflixClone/c09e0989d734929a1ef45646398d291dd1d6c4ef/public/images/icons/Detail.svg"
                  alt=""
                />
                Informações
              </div>
            </a>
          </div>
        </section>
      </div>

      <ListagemFilmes
        Categoria="Popular na Netflix"
        ListagemCards={[
          {
            poster: "\\images\\cards-filmes\\MovieHorizontalCard.png",
            link: "#",
          },
          {
            poster: "\\images\\cards-filmes\\MovieHorizontalCard2.png",
            link: "#",
          },
          {
            poster: "\\images\\cards-filmes\\MovieHorizontalCard3.png",
            link: "#",
          },
          {
            poster: "\\images\\cards-filmes\\MovieHorizontalCard4.png",
            link: "#",
          },
          {
            poster: "\\images\\cards-filmes\\MovieHorizontalCard5.png",
            link: "#",
          },
        ]}
      />
    </section>
  );
}

export default FilmeTopoPagina;
