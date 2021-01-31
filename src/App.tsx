import React, { useState } from 'react';
import './App.scss';
import ChatView from './components/ChatView';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MessageIcon from '@material-ui/icons/Message';
import { ChatMessage, ChatForm } from './interfaces';

function App() {
  const { register, handleSubmit, setValue } = useForm();
  const [replyMessage, setReplyMessage] = useState<ChatMessage>();
  const [chatList, setChatList] = useState<ChatMessage[]>([
    {
      id: String(Math.random()),
      isOwner: false,
      message: 'Hello'
    },
    {
      id: String(Math.random()),
      isOwner: false,
      message: 'How are you doing?'
    },
    {
      id: String(Math.random()),
      isOwner: true,
      message: 'Hello, i\'m fine!',
      reply: {
        id: String(Math.random()),
        isOwner: false,
        message: 'How are you doing?'
      },
    },
    {
      id: String(Math.random()),
      isOwner: true,
      message: 'W8 a minute pls'
    },
    {
      id: String(Math.random()),
      isOwner: true,
      message: 'I\'m trying to find my task...'
    },
    {
      id: String(Math.random()),
      isOwner: false,
      message: 'Ok',
      reply: {
        id: String(Math.random()),
        isOwner: false,
        message: 'W8a minute pls'
      }
    },
    {
      id: String(Math.random()),
      isOwner: true,
      message: 'Well I can\'t do that right now 😞'
    },
    {
      id: String(Math.random()),
      isOwner: false,
      message: 'Why? Can I help you with that?',
      reply: {
        id: String(Math.random()),
        isOwner: true,
        message: 'Well I can\'t do that right now 😞'
      }
    },
    {
      id: String(Math.random()),
      isOwner: true,
      message: 'No, just let me 1 more day to try again when my bro will comeback',
      reply: {
        id: String(Math.random()),
        isOwner: false,
        message: 'Why? Can I help you with that?'
      },
    },
    {
      id: String(Math.random()),
      isOwner: false,
      message: 'Shure, I can w8 till next year 😂',
      reply: {
        id: String(Math.random()),
        isOwner: true,
        message: 'No, just let me 1 more day to try again when my bro will comeback'
      }
    }
  ]);

  const onSubmit = (from: ChatForm) => {
    const chatItem: ChatMessage = {
      id: String(Math.random()),
      isOwner: true,
      message: from.message,
      reply: replyMessage
    }

    setChatList([...chatList, chatItem]);
    setValue("message", "");
  };

  const replyUpdated = (reply: any) => {
    setReplyMessage(reply);
  }

  return (
    <div className="App">
      <ChatView chatList={chatList} replyUpdated={replyUpdated} />

      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        {replyMessage ? <q>{replyMessage.message}</q> : null}
        <TextField
          className="input"
          name="message"
          type="text"
          fullWidth
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
