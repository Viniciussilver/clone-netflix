import React from "react"

import "./FeaturedMovie.css"

export const FeaturedMovie = ({ item }) => {
  let firstDate = new Date(item.first_air_date)
  let genres = []

  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }

  item.overview =
    item.overview.length >= 167
      ? `${item.overview.slice(0, 167)}...`
      : item.overview

  return (
    <div
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="featured-description">{item.overview}</div>
            <div className="featured-buttons">
              <a className="featured-watch" href={null}>
                ► Assistir
              </a>
              <a className="featured-list" href={null}>
                + Minha lista
              </a>
            </div>
            <div className="featured-genres">
              <strong>Gêneros:</strong> {genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
      {/* <div>{item.original_name}</div> */}
    </div>
  )
}
