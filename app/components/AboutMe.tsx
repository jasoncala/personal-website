"use client"

import { useState } from 'react';
import Playlist from './Playlist';
import Image from 'next/image';

// Add actual state management so you can use playlist component (zustand ?)

export default function AboutMe(){
    const [showPlaylist, setShowPlaylist] = useState(false);
    return (
        <div>
            <h1 className="text-3xl py-2 font-roboto">About Me</h1>
            <p className="pb-1 font-roboto">Click below for:</p>
            <ul className="px-8 list-disc font-roboto">
                <li><button onClick={() => setShowPlaylist(!showPlaylist)} className="hover:underline">My current top songs! 🎵🎵</button></li>
                <li><button className="hover:underline">My reading list 📖 </button></li>
                <li><button className="hover:underline">A surprise (cat pics) 🤔</button></li>
            </ul>
            {showPlaylist && <div>
                <div className="absolute z-10 top-0 left-0 right-0 h-fit">
                <div className="flex items-start justify-center w-full h-full">
            <div className="bg-black bg-opacity-70 border-2 border-green-500 text-gray-300 min-h-screen p-10 pt-8 rounded-3xl absolute">
                <div className="flex justify-end"><button onClick={() => setShowPlaylist(!showPlaylist)} className="hover:underline"><h1>close playlist [X]</h1></button></div>
                <div className="flex md:flex-row flex-col">
                    <Image className="mr-6" src="/youngjason.png" alt="cat" width={200} height={200}/>
                    <div className="flex flex-col justify-center">
                        <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">Playlist</h4>
                        <h1 className="mt-0 mb-2 text-white text-4xl">My Current Fav Songs! :)</h1>
                        
                        <p className="text-gray-600 text-sm">Created by <a>Spotify</a> - 5 songs, 3 hr 2 min</p>
                    </div>
                </div>

                <div className="mt-6 flex justify-between">
                    <div className="flex">
                        <button className="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">Play</button>
                        <button className="mr-2 border border-white block p-2 rounded-full">...</button>
                    </div>
                    <div className="text-gray-600 text-sm tracking-widest text-right">
                        <h5 className="mb-1">Followers</h5>
                        <p>5,055</p>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex text-gray-600">
                        <div className="p-2 w-8 flex-shrink-0"></div>
                        <div className="p-2 w-8 flex-shrink-0"></div>
                        <div className="p-2 w-full">Title</div>
                        <div className="p-2 w-full">Artist</div>
                        <div className="p-2 w-full">Album</div>
                        <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
                    </div>

                    <iframe className="rounded-xl" src="https://open.spotify.com/embed/track/6BGNjTZ8zp9MlsIydBa7A9?utm_source=generator" width="100%" height="90px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe className="rounded-xl" src="https://open.spotify.com/embed/track/0tMMPZEt6Gyrl9FI8zSicm?utm_source=generator" width="100%" height="90px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe className="rounded-xl" src="https://open.spotify.com/embed/track/4riDfclV7kPDT9D58FpmHd?utm_source=generator" width="100%" height="90px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe className="rounded-xl" src="https://open.spotify.com/embed/track/3cxZT78mZDyLsLPJKcTu3U?utm_source=generator" width="100%" height="90px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <iframe className="rounded-xl" src="https://open.spotify.com/embed/track/2LlOeW5rVcvl3QcPNPcDus?utm_source=generator" width="100%" height="90px" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                
            </div>
        </div>
                </div>
                <div className="fixed opacity-70 bg-gray-950 w-full h-full top-0 left-0"></div>
            </div>}
        </div>
    )
}