interface Props {
  switchValue: boolean;
}

const Spinner = ({ switchValue }: Props) => {
  return (
    <div className="flex items-start justify-center h-screen">
      <div
        className={`relative w-12 h-12 border-t-0 border-r-0 border-4 ${
          switchValue ? "border-white" : "border-black"
        } rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Spinner;
