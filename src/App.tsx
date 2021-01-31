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
      message: 'W8a minute pls'
    },
    {
      id: String(Math.random()),
      isOwner: false,
      message: 'Okay',
      reply: {
        id: String(Math.random()),
        isOwner: true,
        message: 'W8a minute pls'
      }
    },
    {
      id: String(Math.random()),
      isOwner: true,
      message: 'W8a minute pls'
    },
    {
      id: String(Math.random()),
      isOwner: false,
      message: 'Okay',
      reply: {
        id: String(Math.random()),
        isOwner: true,
        message: 'W8a minute pls'
      }
    },
    {
      id: String(Math.random()),
      isOwner: true,
      message: 'W8a minute pls'
    },
    {
      id: String(Math.random()),
      isOwner: false,
      message: 'Okay',
      reply: {
        id: String(Math.random()),
        isOwner: true,
        message: 'W8a minute pls'
      }
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
      message: 'W8a minute pls'
    },
    {
      id: String(Math.random()),
      isOwner: false,
      message: 'Okay',
      reply: {
        id: String(Math.random()),
        isOwner: true,
        message: 'W8a minute pls'
      }
    }
  ]);

  const onSubmit = (from: ChatForm) => {
    console.log('34', from);

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
    console.log(replyMessage);
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
