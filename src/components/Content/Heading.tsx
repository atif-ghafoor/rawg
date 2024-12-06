interface Props {
  text: string;
}

const Heading = ({ text }: Props) => {
  return <h1 className="text-[70px] font-bold">{text}</h1>;
};

export default Heading;
