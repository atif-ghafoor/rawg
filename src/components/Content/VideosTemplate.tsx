import Video from "../ui/VideoCard";
import { Data } from "../../services/useService";
import { useEffect, useRef, useState } from "react";

interface Props {
  switchValue: boolean;
  gamesData: Data[] | undefined;
}

const Videos = ({ switchValue, gamesData }: Props) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [cardDividedLists, setCardDividedLists] = useState<Data[][]>([]);
  const newdata: Data[][] = [];
  useEffect(() => {
    if (gamesData) newdata.push(gamesData);
    console.log("runones");
    setCardDividedLists(newdata);
    // setTimeout(() => {
    setVideoTemplateResponsive();
    // }, 300);
  }, []);
  function setVideoTemplateResponsive() {
    console.log("Function is running");

    // Ensure data and DOM reference are available
    if (!gamesData || !gridRef.current) return;
    const gridWidth = gridRef.current.clientWidth || 0;
    const videoCards =
      gridRef.current.querySelectorAll<HTMLDivElement>(".video-card");
    // console.log("v", videoCards);
    if (videoCards.length === 0) return;
    console.log("r1");

    const cardWidth = videoCards[0].clientWidth || 0;
    const numberOfColumns = Math.floor(gridWidth / cardWidth);

    if (numberOfColumns === 0) return;

    // Distribute cards cyclically into columns
    const uniqueArray = Array.from(
      new Map(gamesData?.map((item) => [item.id, item])).values()
    );
    const newCardDividedLists: Data[][] = Array.from(
      { length: numberOfColumns },
      () => []
    );

    uniqueArray.forEach((game, index) => {
      const columnIndex = index % numberOfColumns; // Assign to column cyclically
      newCardDividedLists[columnIndex].push(game);
    });

    setCardDividedLists(newCardDividedLists);
    console.log("Updated Card Lists:", newCardDividedLists);
  }

  useEffect(() => {
    setTimeout(() => {
      setVideoTemplateResponsive();
    }, 100);

    // Add a resize listener for responsiveness
    const handleResize = () => setVideoTemplateResponsive();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gamesData]);

  const cardCssClass = "";

  return (
    <div
      ref={gridRef}
      className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] gap-6"
    >
      {cardDividedLists.map((list, columnIndex) => (
        <div key={`column-${columnIndex}`} className="col-grid">
          {list.map((game) => (
            <Video
              key={game.id} // Ensure a unique key for each game card
              added={game.added}
              cardCssClass={cardCssClass}
              genres={game.genres}
              img={game.background_img}
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
      ))}
    </div>
  );
};

export default Videos;
