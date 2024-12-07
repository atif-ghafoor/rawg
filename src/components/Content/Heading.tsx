interface Props {
  text: string;
}

const Heading = ({ text }: Props) => {
  return (
    <h1 className="text-[70px] fh:text-[50px] text-nowrap font-bold">{text}</h1>
  );
};

export default Heading;
