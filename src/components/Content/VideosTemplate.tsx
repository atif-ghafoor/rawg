import Video from "../ui/VideoCard";
import { Data } from "../../services/useService";

interface Props {
  switchValue: boolean;
  gamesData: Data[] | undefined;
}

const Videos = ({ switchValue, gamesData }: Props) => {
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16];
  const cardCssClass = "";
  return (
    <div className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-6">
      {gamesData?.map((game) => (
        <Video
          added={game.added}
          cardCssClass={cardCssClass}
          genres={game.genres}
          img={game.background_img}
          key={game.id}
          metacritic={game.metacritic}
          plartForms={game.parent_platforms}
          releaseDate={game.released}
          rating={game.rating}
          ratings={game.ratings}
          switchValue={switchValue}
          title={game.name}
        />
      ))}
    </div>
  );
};

export default Videos;
