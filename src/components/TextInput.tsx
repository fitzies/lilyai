import { useState } from "react";

export default function TextInput(props: {
  onValueChange: Function;
  onButtonClick: Function;
  canType: boolean;
}) {
  const [value, setValue] = useState<string>("");

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.canType === false) return;
    setValue(() => e.target.value);
    props.onValueChange(e.target.value);
  };

  const btnClick = () => {
    props.onButtonClick();
    props.onValueChange("");
    setValue(() => "");
  };

  return (
    <div className="w-11/12 bg-zinc-800 min-h-[4rem] rounded-lg px-4 relative">
      <input
        className="w-full h-full bg-transparent rounded-lg outline-none font-mono text-white text-xl pr-10"
        onChange={change}
        placeholder="type here..."
        value={value}
      />
      <div
        className="w-16 h-full absolute right-0 hover:text-white duration-150 top-0 cursor-pointer flex justify-center items-center text-gray-500 text-4xl"
        onClick={btnClick}
      >
        ➥
      </div>
    </div>
  );
}
