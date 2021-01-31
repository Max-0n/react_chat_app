import React, { useState } from 'react';
import './App.scss';
import ChatView from './components/ChatView';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MessageIcon from '@material-ui/icons/Message';

function App() {
  const { handleSubmit } = useForm();
  const [messageValue, setMessageValue] = useState<string | null>('');

  const onSubmit = () => {
    console.log(messageValue);
    setMessageValue('');
  };

  return (
    <div className="App">
      <ChatView />
      <p>{messageValue}</p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <TextField
          name="message"
          type="text"
          value={messageValue}
          onChange={event => setMessageValue(event.target.value)}
          label="Write message here..." />
        <IconButton color="primary" type="submit">
          <MessageIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default App;
