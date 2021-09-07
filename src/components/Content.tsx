import { IGenreResponseProps } from "../interfaces/Genre";
import { IMovieProps } from "../interfaces/Movie";
import { MovieCard } from "./MovieCard";
import "../styles/content.scss";

interface IContentProps {
  selectedGenre: IGenreResponseProps;
  movies: IMovieProps[];
}

export function Content(props: IContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
