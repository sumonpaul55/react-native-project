export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovie = async ({ query }: { query: string }) => {
    const endpoint = "/discover/movie?sort_by=popularity.desc";
    const response = await fetch(endpoint, {
        method: "GEt",
        headers: TMDB_CONFIG.headers
    });
    if (!response.ok) {
        throw new Error("Faild to fetch movie", response.statusText as any)
    }
    const data = await response.json();
    return data;
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjk0MmI5NDVlZGI5ODJkZDZjMzNlODUzMjQ2ZDkwNyIsIm5iZiI6MTc1ODE5MTc2OS42NzYsInN1YiI6IjY4Y2JlMDk5ZDU4YWM3YjQ4ZTA3MzkzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQbcPx1efRZPBu1tIJ3o2ityBfvmjt34DfaDm4ZLgO8'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));