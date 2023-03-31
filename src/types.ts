type MessageType = {
  id: number;
  author: string;
  text: string;
};

type GPTMessageType = {
  role: string;
  content: string;
};

export type { MessageType, GPTMessageType };
