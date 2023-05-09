import Image from 'next/image';

export default function Playlist(){
    return (
        <div className="flex items-start justify-center w-full h-full">
            <div className="bg-black bg-opacity-90 text-gray-300 min-h-screen p-10 rounded-3xl absolute">
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
    )
}