import Image from "next/image"

const BottomBar = () => {
    return (
        <div className="flex flex-row items-center justify-between fixed left-88 right-8 bottom-2 rounded-lg shadow-lg bg-gray-600 px-2 h-12">
            +
            <input type="text" placeholder="Enter message..." className="font-semibold w-full bg-transparent outline-none ml-0 mr-auto text-gray-400 placeholder-gray-500 cursor-text" />
        </div>
    )
}

const Post = ({ name, timestamp, text }) => {
    const seed = Math.round(Math.random() * 100)
    return (
        <div className="w-full flex flex-row items-center justify-evenly py-4 px-8 m-0 cursor-pointer">
            <div className='flex flex-col items-center w-12 m-0 ml-auto mb-auto'>
                <Image src="/youngjason.png" alt="pfp" width={200} height={200} className='flex-none w-12 h-full rounded-full shadow-md object-cover bg-gray-100 mb-auto mt-0 mx-0 cursor-pointer' />
            </div>

            <div className="w-4/5 flex flex-col justify-start ml-auto">
                <p className="text-left font-semibold text-white mr-auto whitespace-normal">
                    {name}
                    <small className="text-xs text-left font-semibold text-gray-600 ml-2">{timestamp}</small>
                </p>
                <p className='text-lg text-left text-white mr-auto whitespace-normal'>{text}</p>
            </div>
        </div>
    )
}

export default function DiscordContentContainer() {
    return (
        <div className="flex flex-col bg-gray-700 m-0 h-full w-full overflow-hidden">
            <div className="flex flex-col items-center h-full w-full mt-0 ml-0 mx-auto px-0 pb-12 overflow-y-scroll">
                <Post
                    name='Jason'
                    timestamp='one week ago'
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
                />
                <Post
                    name='Jason'
                    timestamp='one week ago'
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
                />
                <Post
                    name='Jason'
                    timestamp='one week ago'
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
                />
            </div>
            <BottomBar />
        </div>
    )
}