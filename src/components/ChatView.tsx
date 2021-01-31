import React, { useState, useRef, useEffect } from 'react';
import './ChatView.scss';

function ChatView({ chatList, replyUpdated }: any) {
  const [replyMessage, setReplyMessage] = useState<any | null>(null);
  const wrapper = useRef<any | null>(null);

  useEffect(() => {
    console.log('$', chatList);
    setReplyMessage(null);
    replyUpdated(null);
    wrapper.current.scrollTop = wrapper.current.scrollHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatList]);

  const onClickHandler = (chatItem: any) => {
    if (replyMessage && replyMessage === chatItem) {
      setReplyMessage(null);
      replyUpdated(null);
    } else {
      setReplyMessage(chatItem);
      replyUpdated(chatItem);
    }
  };

  return (
    <section className="ChatView" ref={wrapper}>
      <div className="wrapper">
        {chatList.map((chatItem: any) => (
          <div
            className={`item ${chatItem.isOwner && 'owner'}`}
            key={chatItem.id}
            onClick={() => { onClickHandler(chatItem) }}
          >
            {chatItem.reply ? <q>{chatItem.reply.message}</q> : null}
            {chatItem.message}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChatView;
