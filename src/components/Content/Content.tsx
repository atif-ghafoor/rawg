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
  axiosParams: Params;
  setAxiosParams: (value: Params) => void;
  headerText: string;
}

const content = ({
  switchValue,
  setTotalGames,
  axiosParams,
  setAxiosParams,
  headerText,
}: Props) => {
  const [gamesData, setGamesData] = useState<Data[]>();
  const [isLoading, setLoading] = useState(false);
  const [onScrolLoading, setOnScrolLoding] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = useService.getGames(axiosParams);
    request
      .then((res) => {
        const { count, filterdData, next } = useService.filterData(res);
        setGamesData(filterdData);
        setTotalGames(count);
        setNextPage(next);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        console.log(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, [axiosParams]);
  async function fetchGames() {
    if (!nextPage) return;
    setOnScrolLoding(true);
    const { request } = await useService.onScrollFetching(nextPage);
    const res = await request.finally(() => {
      setOnScrolLoding(false);
    });

    const { count, filterdData, next } = useService.filterData(res);
    setGamesData((prevGames: any) => [...prevGames, ...filterdData]);
    setTotalGames(count); // Append new games
    setNextPage(next); // Update next page link
  }
  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      await fetchGames();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPage]);
  return (
    <>
      <div className="w-full h-full p-5 fh:p-0 flex flex-col gap-3">
        <Heading text={headerText} />
        <Filters
          axiosParams={axiosParams}
          setAxiosParams={setAxiosParams}
          switchValue={switchValue}
        />
        {isLoading ? (
          <Spinner switchValue={switchValue} />
        ) : (
          <VideosTemplate gamesData={gamesData} switchValue={switchValue} />
        )}
        <div className={onScrolLoading ? "" : "hidden"}>
          <Spinner switchValue={switchValue} />
        </div>
      </div>
    </>
  );
};

export default content;
