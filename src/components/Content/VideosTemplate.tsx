import Video from "../ui/VideoCard";
import { Data } from "../../services/useService";
import { useEffect, useRef } from "react";

interface Props {
  switchValue: boolean;
  gamesData: Data[] | undefined;
}

const Videos = ({ switchValue, gamesData }: Props) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  function setVideoTemplateResponsive() {
    console.log("function is runing");
    if (gamesData === null) return;
    if (!gridRef.current) return;
    const gridWidth = gridRef.current.clientWidth || 0;
    const videoCards = gridRef.current.querySelectorAll(".video-card");
    if (videoCards.length === 0) return;
    const cardWidth = videoCards[0].clientWidth || 0;
    const numberOfColumns = Math.floor(gridWidth / cardWidth);
    const numberOFDivder = Math.ceil(videoCards.length / numberOfColumns);
    const cardDividedLists = Array.from(
      { length: numberOfColumns },
      (_, colIndex) => {
        return Array.from(videoCards).slice(
          colIndex * numberOFDivder,
          (colIndex + 1) * numberOFDivder
        );
      }
    );
    gridRef.current.innerHTML = ""; // Clear the grid
    cardDividedLists.map((listGame) => {
      const div = document.createElement("div"); // Create a new div for the row
      div.classList.add(".col-grid");
      listGame.forEach((gameCard) => {
        div.appendChild(gameCard); // Append each card to the div
      });
      gridRef.current?.appendChild(div); // Append the row to the grid
    });
    // }
  }
  useEffect(() => {
    if (gridRef.current) {
      setVideoTemplateResponsive();

      // Optionally, add a resize listener
      const handleResize = () => setVideoTemplateResponsive();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [gamesData]);
  const cardCssClass = "";
  const uniqueArray = Array.from(
    new Map(gamesData?.map((item) => [item.id, item])).values()
  );
  return (
    <div
      ref={gridRef}
      className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-6"
    >
      {uniqueArray?.map((game) => (
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
