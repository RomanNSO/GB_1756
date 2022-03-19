import React, { useState, useEffect } from "react";
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";
import { nanoid } from "nanoid";
import { ChatList } from "./components/ChatList/ChatList";
import { Box } from "@mui/system";

const defaultMessages = [
  {
    id: 1,
    author: "Geekbrains",
    text: "Welcome to the chat",
  },
];
export const App = () => {
  const [messages, setMessages] = useState(defaultMessages);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author === "User") {
      const timeout = setTimeout(
        () =>
          addMessage({
            text: `I'm BOT`,
            author: "BOT",
          }),
        1000
      );
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = ({ text, author }) => {
    setMessages([
      ...messages,
      {
        id: nanoid(),
        author,
        text,
      },
    ]);
  };

  // handleInputChange = (ev) => {
  //     this.setState({ text: ev.target.value })
  // }

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <div style={{ paddingRight: "150px", paddingLeft: "50px" }}>
          <h2>List of chats</h2>
          <ChatList />
        </div>
        <div>
          <h1>Welcome to react</h1>
          <MessageList messages={messages} />
          <Form addMessage={addMessage} />
        </div>
      </Box>
    </>
  );
};
