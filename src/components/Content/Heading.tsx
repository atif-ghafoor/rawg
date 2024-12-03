interface Props {
  text?: string;
}

const Heading = ({ text = "New and trending" }: Props) => {
  return <h1 className="text-[70px] font-bold">{text}</h1>;
};

export default Heading;
