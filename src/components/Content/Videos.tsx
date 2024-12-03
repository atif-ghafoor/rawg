import Video from "../ui/Video";

interface Props {
  switchValue: boolean;
}

const Videos = ({ switchValue }: Props) => {
  return (
    <div className="mt-2 flex flex-wrap gap-5">
      <Video switchValue={switchValue} />
      <Video switchValue={switchValue} />
      <Video switchValue={switchValue} />
      <Video switchValue={switchValue} />
      <Video switchValue={switchValue} />
      <Video switchValue={switchValue} />
      <Video switchValue={switchValue} />
      <Video switchValue={switchValue} />
      <Video switchValue={switchValue} />
    </div>
  );
};

export default Videos;
