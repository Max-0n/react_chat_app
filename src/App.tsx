import React, { useState } from 'react';
import './App.scss';
import ChatView from './components/ChatView';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MessageIcon from '@material-ui/icons/Message';

type ChatMessage = {
  id: string,
  isOwner: boolean,
  message: string,
  reply?: ChatMessage
}

type ChatForm = {
  message: string
}

function App() {
  const { register, handleSubmit, setValue } = useForm();
  const [chatList, setChatList] = useState<ChatMessage[]>([]);

  const onSubmit = (from: ChatForm) => {
    console.log('34', from);

    const chatItem: ChatMessage = {
      id: String(Math.random()),
      isOwner: true,
      message: from.message
    }

    setChatList([...chatList, chatItem]);
    setValue("message", "");
  };

  const replyUpdated = (value: any) => {
    console.log('raplyHandler', value)
  }

  return (
    <div className="App">
      <ChatView chatList={chatList} replyUpdated={replyUpdated} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <TextField
          name="message"
          type="text"
          inputRef={register}
          label="Write message here..." />
        <IconButton color="primary" type="submit">
          <MessageIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default App;
