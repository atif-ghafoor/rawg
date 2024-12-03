interface Props {
  text?: string;
}

const Heading = ({ text = "New and trending" }: Props) => {
  return <h1 className="text-[70px] pl-7 font-bold">{text}</h1>;
};

export default Heading;
