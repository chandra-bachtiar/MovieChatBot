"use client";
import Chat from './components/chat';
import Footer from './components/footer';
import Header from './components/header';
import { useState } from 'react';


const chat = [
    {
        type: "chat",
        message: `Selamat datang di MovieChatBot by Chand. Silahkan kirimkan judul film yang ada ingin cari saya akan mencoba mencari detail informasi dari film tersebut.`,
        fromMe: true,
    },{
        type: "user",
        message: `hallo juga`,
        fromMe: false,
    }
];



const Home = () => {
    const [chatData, setChatData] = useState(chat);
    const [inputData, setInputData] = useState('testing chandra');
    const [isLoading, setIsLoading] = useState(false);


    const handleClick = async () => {
        setIsLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${inputData}`);
        const data = await response.json();

        setChatData([...chatData, data]);
        setInputData('');
        setIsLoading(false);
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
                    <Chat chatData={chatData} />
                    <Footer
                        handleInputChange={handleInputChange}
                        inputData={inputData}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </div>
    )
};

export default Home;