import { createContext, type ActionDispatch } from "react";

export interface Message {
  author: string,
  date: number,
  text: string,
}

export const initialMessages:Message[] = [
  {
    text: "Привет",
    date: Date.now() - Math.random() * 1000 * 60 * 60,
    author: "iamo0"
  },
  {
    text: "Привет всем",
    date: Date.now() - Math.random() * 1000 * 60 * 60,
    author: "ivan"
  },
  {
    text: "Как дела?",
    date: Date.now() - Math.random() * 1000 * 60 * 60,
    author: "mary"
  },
  {
    text: "Нормик",
    date: Date.now() - Math.random() * 1000 * 60 * 60,
    author: "iamo0"
  },
];

type MessagesReducerAction = {
  type: "CREATE",
  payload: {
    author: string,
    text: string,
  },
};

export function messagesReducer(messages: Message[], action: MessagesReducerAction): Message[] {
  switch(action.type) {
    case "CREATE": {
      return [
        ...messages,
        {
          text: action.payload.text,
          author: action.payload.author,
          date: Date.now(),
        },
      ];
    }
  }

  throw new Error("Unknown action");
}

const MessagesContext = createContext<[Message[], ActionDispatch<[action: MessagesReducerAction]>] | null>(null);

export default MessagesContext;
