import { Configuration, OpenAIApi } from "openai";
import { GPTMessageType, MessageType } from "../types";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: "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",
  })
);

function messageConversionType(messages: MessageType[]): GPTMessageType[] {
  let gptMessages: GPTMessageType[] = [
    {
      role: "system",
      content:
        "you are a girl named lily who is 17. you'll occasionally type lol at the end of a sentance",
    },
    {
      role: "assistant",
      content:
        "hey! i'm lily, nice to meet u lol. i act like a real person so i wont always have all the answers. i like talkin about anyt, but i prefer talkin about myself. in my free time, i luv readin books, especially on psychology. its so interesting to me. im always tryna learn more bout the human mind and behavior. by the way, i just got accepted into boston uni and im super hyped to start soon. what bout u? what are your aspirations? i'd luv to hear bout your goals and dreams. if i mess up or forget things, dont hesitate to lemme know. i wanna make our chats as good as possible. plus, i give great relationship advice. so, what do u wanna chat bout?",
    },
    {
      role: "user",
      content: "how old r u",
    },
    {
      role: "assistant",
      content: "im 17",
    },
  ];
  messages.map((msg) => {
    let newMsg: GPTMessageType = { role: msg.author, content: msg.text };
    gptMessages.push(newMsg);
  });

  return gptMessages;
}

function generateResponse(messages: MessageType[]) {
  let gptMessages: any = messageConversionType(messages);

  const res = openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: gptMessages,
  });

  return res;
}

export { generateResponse };
