import axios from 'axios';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { AiFillWindows } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";

export default function AllGames() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/games').then(res => {
            const results = res.data;
            setData(results)
            console.log(results)
        })
    }, [])

    const getIcon = (platform) => {
        switch (platform) {
            case "PC (Windows)":
                return <AiFillWindows />;
            case "Web Browser":
                return <FaFirefoxBrowser />;
            default:
                return "Test"
        }
    }

    return (
        <div className="bg-slate-200 min-h-[100vh]">
            <div className="container mx-auto -md:max-w-full max-w-5xl flex items-center flex-col px-6 sm:px-0">
                <div className="page-title bg-gray-400 my-5 w-full p-4 shadow-sm rounded-lg">
                    <h3 className='text-3xl'>List of Game</h3>
                    <Link href="/"><a>Kembali </a></Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5 w-full">
                    {data?.map((game) => (
                        // cardnya
                        <div key={game.id} className="w-full pb-4 bg-white shadow-sm rounded-lg ">
                            <img src={game.thumbnail} alt="" className="w-full cover rounded-t-md mb-2" />
                            <div className="mx-4 game-properties">
                                <h2 className='font-bold text-xl'>{game.title}</h2>
                                <p className='text-base'>
                                    {game.short_description}
                                </p>
                                <span className='flex items-center bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2'>{game.genre}</span>
                                <span className='flex items-center bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 italic'>{getIcon(game.platform)} {game.platform}
                                </span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
