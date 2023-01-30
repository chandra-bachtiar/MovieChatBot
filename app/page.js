"use client";
import Chat from './components/chat';
import Footer from './components/footer';
import Header from './components/header';
import { useState, useRef, useEffect } from 'react';


const chat = [
    {
        type: "chat",
        message: `Selamat datang di MovieChatBot by Chand. Silahkan kirimkan judul film yang ada ingin cari saya akan mencoba mencari detail informasi dari film tersebut.`,
        fromMe: true,
    }, {
        type: "user",
        message: `hallo juga`,
        fromMe: false,
    }
];



const Home = () => {
    const [chatData, setChatData] = useState(chat);
    const [inputData, setInputData] = useState('testing chandra');
    const [isLoading, setIsLoading] = useState(false);
    const [isChange, setIsChange] = useState(0);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const div = bottomRef.current;
        div.scrollTop = div.scrollHeight;
    }, [isChange]);


    const handleClick = async () => {
        if (inputData) {
            setIsLoading(true);
            setIsChange(isChange + 1);
            // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputData}`);
            // const data = await response.json();

            let inputChatData = chatData;

            const dataFromUser = {
                type: "user",
                message: inputData,
                fromMe: false,
            };

            inputChatData.push(dataFromUser);

            const data = {
                type: "API",
                message: `this message from api`,
                fromMe: true,
            };

            inputChatData.push(data);

            setChatData(inputChatData);
            setInputData('');
            setIsLoading(false);
        } else {
            inputRef.current.focus();
        }

    };

    const handleReset = () => {
        setChatData(chat);
    };

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };


    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="rounded-xl shadow-lg bg-[#E8E9EA] w-[95vw] h-[85vh] md:w-[45vw]">
                <div className='flex flex-col gap-2 h-full w-full'>
                    <Header
                        handleReset={handleReset}
                        isLoading={isLoading}
                    />
                    <Chat
                        chatData={chatData}
                        bottomRef={bottomRef}
                    />
                    <Footer
                        handleInputChange={handleInputChange}
                        inputData={inputData}
                        inputRef={inputRef}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </div>
    )
};

export default Home;