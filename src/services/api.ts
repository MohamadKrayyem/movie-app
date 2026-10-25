const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
}

interface MoviesResponse {
  results: Movie[];
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  const data: MoviesResponse = await response.json();
  return data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  const data: MoviesResponse = await response.json();
  return data.results;
};
