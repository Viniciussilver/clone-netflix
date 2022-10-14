import React, { useContext, useState } from "react"
import { MovieContext } from "../Context/MovieContext"

import "./AboutMovie.css"
export const AboutMovie = () => {
  const [visible, setVisible] = useState(false)
  const { movie, saveMovie } = useContext(MovieContext)

  if (movie) {
    movie.overview =
      movie.overview.length >= 377
        ? `${movie.overview.slice(0, 378)}...`
        : movie.overview
  }
  return (
    <div className={!movie ? "container" : "container visible"}>
      {movie && (
        <div className="container-item">
          <div className="info">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="imagem poster do filme"
            />
            <div className="">
              <p className="name">{movie.name ? movie.name : movie.title}</p>
              <p style={{ color: "#999", fontSize: 17 }}>
                ano:{" "}
                {movie.first_air_date
                  ? movie.first_air_date.slice(0, 4)
                  : movie.release_date.slice(0, 4)}
              </p>
              <p style={{ fontSize: 17, color: "#46d369" }}>
                {movie.vote_average} pontos
              </p>
            </div>
          </div>

          {movie.overview && (
            <>
              <p className="title-section">Descrição:</p>
              <p className="description">{movie.overview}</p>
            </>
          )}
          <button onClick={() => saveMovie(null)}>X</button>
        </div>
      )}
    </div>
  )
}
