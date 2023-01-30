import React from 'react';
import Image from 'next/image'
import profile from '../../public/profile.jpg';

const Header = () => {
    return (
        <div className='w-full h-[10%] flex-none bg-[#f5f5f5] rounded-t-xl p-2'>
            <div className="flex h-full w-full">
                <div className="flex-none w-[15%] pl-3">
                    <div class="avatar online">
                        <div class="w-10 rounded-full">
                            <Image src={profile} alt="Profile Picture" />
                        </div>
                    </div>
                </div>
                <div className="grow">
                    <div className="flex flex-col h-full">
                        <div className="w-full h-4/5">
                            <p className='font-bold'>MovieChatBot!</p>
                        </div>
                        <div className="flex-none grow">
                            <p className='text-sm'>Online</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-[20%] md:w-[15%]">
                    <button class="btn btn-warning btn-sm">Clear</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
