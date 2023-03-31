import { MessageType } from "../types";

export default function Message(props: MessageType) {
  return (
    <>
      {props.author === "user" ? (
        <div className="w-11/12 bg-zinc-800 min-h-16 rounded-lg px-5 py-4 text-white font-mono outline-none text-xl mb-4">
          {props.text}
        </div>
      ) : (
        <div className="w-11/12 bg-zinc-700 min-h-16 rounded-lg px-5 py-4 text-white font-mono outline-none text-xl mb-4">
          {props.text}
        </div>
      )}
    </>
  );
}
