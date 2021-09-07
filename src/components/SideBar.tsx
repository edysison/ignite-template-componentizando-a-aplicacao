import { IGenreResponseProps } from "../interfaces/Genre";
import { Button } from "./Button";
import "../styles/sidebar.scss";

interface IGenresProps {
  genres: IGenreResponseProps[];
  handleClickButton: Function;
  selectedGenreId: number;
}

export function SideBar(props: IGenresProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre: IGenreResponseProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
