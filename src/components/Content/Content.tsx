import Heading from "./Heading";
import Filters from "./Filters";
import VideosTemplate from "./VideosTemplate";
import { useEffect, useState } from "react";
import useService, { Data, Params } from "../../services/useService";
import { AxiosError } from "axios";
import Spinner from "../ui/Spinner";

interface Props {
  switchValue: boolean;
  setTotalGames: (value: number) => void;
  selctedGenre: Params;
  setGenre: (value: Params) => void;
}

const content = ({
  switchValue,
  setTotalGames,
  selctedGenre,
  setGenre,
}: Props) => {
  const [gamesData, setGamesData] = useState<Data[]>();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = useService.getGames(selctedGenre);
    request
      .then((res) => {
        console.log(res);

        const { count, filterdData } = useService.filterData(res);
        setTimeout(() => {
          setGamesData(filterdData);
          setTotalGames(count);
          setLoading(false);
        }, 2000);
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, [selctedGenre]);
  return (
    <>
      <div className="w-full h-full flex flex-col gap-3">
        <Heading />
        <Filters switchValue={switchValue} />
        {isLoading ? (
          <Spinner switchValue={switchValue} />
        ) : (
          <VideosTemplate gamesData={gamesData} switchValue={switchValue} />
        )}
      </div>
    </>
  );
};

export default content;
