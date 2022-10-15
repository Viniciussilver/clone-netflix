import React, { useContext, useRef } from "react"
import { MovieContext } from "../Context/MovieContext"

import "./MovieRow.css"

export const MovieRow = ({ title, items, slug }) => {
  const { saveMovie } = useContext(MovieContext)
  const carousel = useRef(null)

  // const { saveMovie } = useContext(MovieContext)
  // console.log(items)
  // const [scrollX, setScrollX] = useState(-400)
  // console.log(scrollX)

  // const handleLeft = () => {
  //   let x = scrollX + Math.round(window.innerWidth / 2)

  //   if(x > 0 ){
  //     x=0
  //   }
  //   setScrollX(x)

  // }
  // const handleRight = () => {

  // }

  const handleScollLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }
  const handleScollRight = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }


  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow-listarea">
        {/* <div className="row-left" >  </div>
      <div className="row-right" > </div> */}
        <div className="row-list" ref={carousel}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow-item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt="Poster do filme"
                />
                <div className="MovieView">
                  <button
                    onClick={() => saveMovie(item, slug)}
                    className="button"
                    style={{
                      marginBottom: 17,

                      borderRadius: 5,
                      backgroundColor: "#333",
                      color: "white",

                      cursor: "pointer",
                    }}
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="buttons-scroll">
      <button onClick={handleScollLeft}>◄</button>
      <button onClick={handleScollRight}>►</button>

      </div>
    </div>
  )
}
