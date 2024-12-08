import Video from "../ui/VideoCard";
import { Data } from "../../services/useService";
import { useEffect, useRef, useState } from "react";

interface Props {
  switchValue: boolean;
  gamesData: Data[] | undefined;
}

const Videos = ({ switchValue, gamesData }: Props) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [responsiveListsOfGames, setResponsiveListsOfGames] = useState<
    Data[][]
  >([]);
  useEffect(() => {
    const initialGames: Data[][] = [];
    if (gamesData) initialGames.push(gamesData);
    setResponsiveListsOfGames(initialGames);
  }, []);
  function setVideoTemplateResponsive() {
    // Ensure data and DOM reference are available
    if (!gamesData || !gridRef.current) return;
    const gridWidth = gridRef.current.clientWidth || 0;
    const videoCards =
      gridRef.current.querySelectorAll<HTMLDivElement>(".video-card");
    if (videoCards.length === 0) return;
    const videoCardWidth = videoCards[0].clientWidth || 0;
    const noOfColumnsInGrid = Math.floor(gridWidth / videoCardWidth);

    // Distribute cards cyclically into columns
    const uniqueArray = Array.from(
      // make sure the games in gamesData are not dublicates
      new Map(gamesData?.map((item) => [item.id, item])).values()
    );
    const nestedListsOfGames: Data[][] = Array.from(
      { length: noOfColumnsInGrid },
      () => []
    );

    uniqueArray.forEach((game, index) => {
      const columnIndex = index % noOfColumnsInGrid; // Assign to column cyclically
      nestedListsOfGames[columnIndex].push(game);
    });

    setResponsiveListsOfGames(nestedListsOfGames);
  }

  useEffect(() => {
    setTimeout(() => {
      // wait for intialGames first show in web
      setVideoTemplateResponsive();
    }, 100);
    // Add a resize listener for responsiveness
    const handleResize = () => setVideoTemplateResponsive();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gamesData]);

  return (
    <div
      ref={gridRef}
      className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-6"
    >
      {responsiveListsOfGames.map((list, columnIndex) => (
        <div key={`column-${columnIndex}`} className="col-grid">
          {list.map((game) => (
            <Video
              key={game.id} // Ensure a unique key for each game card
              added={game.added}
              genres={game.genres}
              img={game.background_img}
              metacritic={game.metacritic}
              plartForms={game.parent_platforms}
              releaseDate={game.released}
              rating={game.rating}
              ratings={game.ratings}
              screenshots={game.screenshots}
              switchValue={switchValue}
              title={game.name}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Videos;
