import Heading from "./Heading";
import Filters from "./Filters";
import Videos from "./Videos";

interface Props {
  switchValue: boolean;
}
const content = ({ switchValue }: Props) => {
  return (
    <>
      <div className="w-fit h-full flex flex-col gap-3">
        <Heading />
        <Filters switchValue={switchValue} />
        <Videos switchValue={switchValue} />
      </div>
    </>
  );
};

export default content;
