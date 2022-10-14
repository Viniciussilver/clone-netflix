const API_KEY = "bbf292279e14f469c50f7455d3bf8a91"
const BASE_URL = "https://api.themoviedb.org/3"

const basicFetch = async (endpoint) => {
  const data = await fetch(`${BASE_URL}${endpoint}`)
    .then((res) => res.json())
    .catch((e) => console.log(e))
  return data
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        Title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        Title: "Recomendados para você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        Title: "Em alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        Title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        Title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        Title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        Title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        Title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId){
        switch(type){
            case "movie":
                info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)

            break;

            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
            
                break;

                default:
                    info = null
                    break;
        }
    }
    return info

  }
}
