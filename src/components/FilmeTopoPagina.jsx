// import React from 'react'
import '../layouts/css/FilmeTopoPagina.css'

function FilmeTopoPagina() {
  return (
    <section>
        <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/refs/heads/main/public/images/MoviePoster.png" alt="" />
        
        <div className='movieInfo'>
          <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/refs/heads/main/public/images/MovieName.png" alt="" />

          <section>
            
            <div className='RankIconText'>
            <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/2d4e25b437618442dbe0054ec1fbea31c975baff/public/images/icons/Top10Badge.svg" alt="" width={32}/>
            <span>Türkiye’de Bugün 4 Numara</span>
            </div>

            <div className='movieDescription'>
              <p>Küçük yaşta başının çaresine bakmayı öğrenen ve çok çalışarak iş dünyasında önemli bir konuma gelen Emir, bir gün sokak şarkıcısı bir kızla karşılaşır ve hayatı değişir.</p>
            </div>

            <div className='buttons'>
              <a href='#'>
                <div> 
                  <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/8d1731702ab8bf26466d99a38b6374da9deb5c82/public/images/icons/Play.svg" alt="" />Play</div>
                </a>
              <a href='#'>
                <div> <img src="https://raw.githubusercontent.com/Borsatole/NetflixClone/8d1731702ab8bf26466d99a38b6374da9deb5c82/public/images/icons/Play.svg" alt="" />Mais Informações</div>
                </a>
            </div>
          </section>
          
        </div>

        

    </section>
  )
}

export default FilmeTopoPagina