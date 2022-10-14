import React, { useEffect, useState, useContext } from "react"
import Tmdb from "./services/Tmdb"
import "./App.css"
import { MovieRow } from "./components/MovieRow"
import { FeaturedMovie } from "./components/FeaturedMovie"
import { Header } from "./components/Header"
import { MovieContext } from "./Context/MovieContext"
import { AboutMovie } from "./components/AboutMovie"

function App() {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const getMovies = async () => {
      const res = await Tmdb.getHomeList()
      setMovieList(res)

      let originals = res.filter((i) => i.slug === "originals")

      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      )
      let chosen = originals[0].items.results[randomChosen]

      let choseInfo = await Tmdb.getMovieInfo(chosen.id, "tv")
      setFeaturedData(choseInfo)
    }
    getMovies()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener("scroll", scrollListener)
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <div className="lists">
        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            slug={item.slug}
            title={item.Title}
            items={item.items}
          />
        ))}
      </div>
      <AboutMovie />
      <footer>
        Feito com{" "}
        <span role="img" aria-label="coração">
          💖
        </span>{" "}
        por Vinícius!
      </footer>
    </div>
  )
}

export default App
