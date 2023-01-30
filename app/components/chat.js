import Image from 'next/image';
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
                                <div className="chat-bubble chat-bubble-accent">
                                    <div className='flex justify-center items-center w-full'>
                                        <Image
                                            src={el.imageUrl}
                                            alt="Movie Image"
                                            width={200}
                                            height={330}
                                            className="rounded-xl"
                                        />
                                    </div>

                                    <p className='font-bold text-lg text-center'>{el.judul}</p>
                                    <p>Tgl Rilis : {el.tahun ? el.tahun.split('-').reverse().join('/') : 'Tidak Ditemukan'}</p>
                                    <p>Rating : ⭐{el.rating}</p>
                                    <p className='font-bold'>Sinopsis</p>
                                    <p>{el.deskripsi}</p>
                                </div>
                            </div>
                        )
                    }

                })
            }
        </div>
    );
}

export default Chat;
