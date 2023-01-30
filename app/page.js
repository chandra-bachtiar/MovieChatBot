import Chat from './components/chat';
import Header from './components/header';

const Home = () => (
    <div className="flex justify-center items-center min-h-screen">
        <div className="rounded-xl shadow-lg bg-[#E8E9EA] w-[95vw] h-[85vh] md:w-[45vw]">
            <div className='flex flex-col gap-2 h-full w-full'>
                <Header />
                <div className='w-full grow'>test2</div>
                <div className='w-full h-[15%] flex-none'>test3</div>
            </div>
            {
                //<Header /> }
                //<Chat />
            }
        </div>
    </div>
);

export default Home;