"use client";
import React, { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        setMessages([...messages, event.target.message.value]);
        event.target.message.value = '';
    };

    return (
        <div>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" name="message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;