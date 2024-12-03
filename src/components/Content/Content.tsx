import Heading from "./Heading";
import Filters from "./Filters";

interface Props {
  switchValue: boolean;
}
const content = ({ switchValue }: Props) => {
  return (
    <>
      <div className="w-fit h-full border-white border-2">
        <Heading />
        <Filters switchValue={switchValue} />
      </div>
    </>
  );
};

export default content;
