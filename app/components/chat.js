import React from 'react';

const Chat = ({ chatData, bottomRef }) => {
    // console.log(chatData);
    return (
        <div className='px-3 overflow-auto no-scrollbar grow' ref={bottomRef}>
            {
                chatData.map((el, idx) => {

                    if (el.type === "chat") {
                        return (
                            <div key={idx} className="chat chat-start">
                                <div className="chat-bubble chat-bubble-accent">{el.message}</div>
                            </div>
                        )
                    } else if (el.type === "user") {
                        return (
                            <div key={idx} className="chat chat-end">
                                <div className="chat-bubble chat-bubble-info">{el.message}</div>
                            </div>
                        )
                    } else if (el.type === "API") {
                        return (
                            <div key={idx} className="chat chat-start">
                                <div className="chat-bubble chat-bubble-accent">{el.message}</div>
                            </div>
                        )
                    }

                })
            }
        </div>
    );
}

export default Chat;
