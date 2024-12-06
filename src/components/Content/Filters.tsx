import { useState } from "react";
import Filter from "../ui/Filter";
import { Params } from "../../services/useService";

interface Props {
  switchValue: boolean;
  setAxiosParams: (value: Params) => void;
  axiosParams: Params;
}
const Filters = ({ switchValue, setAxiosParams, axiosParams }: Props) => {
  const [selectedOrder, setSeletedOrder] = useState("Relevance");
  const [plartFormFilter, setPlatformFilter] = useState("All Platforms");
  const options = [
    { name: "Relevance", id: "" },
    { name: "Date added", id: "added" },
    { name: "Name", id: "name" },
    { name: "Release date", id: "released" },
    { name: "Popularity", id: "popularity" },
    { name: "Average rating", id: "rating" },
  ];
  const Platforms = [
    { name: "All Platforms", id: "" },
    { name: "PC", id: "4" },
    { name: "PlayStation", id: "15,16,18,27,187" },
    { name: "Xbox", id: "1,14,80,186" },
    { name: "iOS", id: "3" },
    { name: "Android", id: "21" },
    { name: "Apple Macintosh", id: "5,41,55" },
    { name: "Linux", id: "6" },
    { name: "Nintendo", id: "7,8,9,13,83" },
  ];
  return (
    <div className="flex gap-3 z-10">
      <Filter
        options={options}
        selectedOrder={selectedOrder}
        setSeletedOrder={setSeletedOrder}
        switchValue={switchValue}
        axiosParams={axiosParams}
        setAxiosParams={setAxiosParams}
      />
      <Filter
        options={Platforms}
        selectedOrder={plartFormFilter}
        setSeletedOrder={setPlatformFilter}
        switchValue={switchValue}
        axiosParams={axiosParams}
        setAxiosParams={setAxiosParams}
      />
    </div>
  );
};

export default Filters;
