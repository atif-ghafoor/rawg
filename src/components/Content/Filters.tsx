import { useState } from "react";
import Filter from "../ui/Filter";

interface Props {
  switchValue: boolean;
}
const Filters = ({ switchValue }: Props) => {
  const [selectedOrder, setSeletedOrder] = useState("Relevance");
  const [plartForm, setPlatform] = useState("All Platforms");
  const options = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];
  const Platforms = [
    "All Platforms",
    "PC",
    "PlayStation",
    "Xbox",
    "iOS",
    "Android",
    "Apple Macintosh",
    "Linux",
    "Nintendo",
  ];
  return (
    <div className="flex gap-3 z-10">
      <Filter
        options={options}
        selectedOrder={selectedOrder}
        setSeletedOrder={setSeletedOrder}
        switchValue={switchValue}
      />
      <Filter
        options={Platforms}
        selectedOrder={plartForm}
        setSeletedOrder={setPlatform}
        switchValue={switchValue}
      />
    </div>
  );
};

export default Filters;
