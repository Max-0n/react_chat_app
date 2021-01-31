import React, { useState, useEffect } from 'react';

function ChatView({ chatList, replyUpdated }: any) {

  const [replyMessage, setReplyMessage] = useState<any | null>(null);

  useEffect(() => {
    console.log('$', chatList);
    setReplyMessage(null);
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
    <section className="ChatView">
      <ol>
        {chatList.map((chatItem: any) => (
          <li
            key={chatItem.id}
            onClick={() => { onClickHandler(chatItem) }}
          >
            {chatItem.message}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ChatView;
