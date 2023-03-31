import { useState } from "react";
import Message from "./components/Message";
import TextInput from "./components/TextInput";
import { generateResponse } from "./lib/gpt";
import {
  formatResponse,
  getLocalStorage,
  saveToLocalStorage,
} from "./lib/helper";
import { useMount } from "./lib/hooks";
import { MessageType } from "./types";

function App() {
  const [textInput, setTextInput] = useState<string>("");

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [msgRecieved, setMsgRecieved] = useState<boolean>(true);

  const onTextChange = (value: string) => {
    setTextInput(() => value);
  };

  const submitText = () => {
    if (textInput.length < 0) return;
    let msgs = messages;
    msgs = [...msgs, { id: msgs.length, author: "user", text: textInput }];
    setMessages(() => msgs);
    setMsgRecieved(() => false);

    generateResponse(msgs).then((res) => {
      const data = formatResponse(res.data.choices[0].message?.content!);
      msgs = [...msgs, { id: msgs.length, author: "assistant", text: data! }];
      setMessages(() => msgs);
      setMsgRecieved(() => true);
      saveToLocalStorage("messages", msgs);
    });
  };

  useMount(() => {
    const msgs: any[] = getLocalStorage("messages");
    if (msgs) {
      setMessages(() => msgs);
    }
  });

  const clearMessages = () => {
    setMessages(() => []);
    saveToLocalStorage("messages", []);
  };

  return (
    <>
      <div className="bg-zinc-900 w-screen h-screen flex flex-col justify-end items-center p-16 overflow-auto">
        <div
          className="absolute top-0 right-0 text-zinc-600 m-4 font-mono font-bold bg-zinc-900 p-2 rounded-lg cursor-pointer hover:bg-zinc-800 hover:text-white duration-150"
          onClick={clearMessages}
        >
          CLEAR MESSAGES
        </div>
        {messages.map((msg) => (
          <Message
            key={msg.id}
            id={msg.id}
            author={msg.author}
            text={msg.text}
          />
        ))}
        {msgRecieved ? (
          <TextInput
            onValueChange={onTextChange}
            onButtonClick={submitText}
            canType={true}
          />
        ) : (
          <TextInput
            onValueChange={onTextChange}
            onButtonClick={submitText}
            canType={false}
          />
        )}
      </div>
    </>
  );
}

export default App;
