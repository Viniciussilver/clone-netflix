import React, { createContext, useState } from "react"
import Tmdb from "../services/Tmdb"

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState(null)

  const saveMovie = (item, slug) => {
    setMovie(item)
  }

  return (
    <MovieContext.Provider value={{ movie, saveMovie }}>
      {children}
    </MovieContext.Provider>
  )
}
