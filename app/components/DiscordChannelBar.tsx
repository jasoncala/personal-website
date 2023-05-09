"use client"

import { useState } from "react";

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="m-0 w-full px-2 pb-2 transition duration-300 ease-in-out">
            <div onClick={() => setExpanded(!expanded)} className="flex flex-row items-center justify-evenly mx-0 text-gray-500 cursor-pointer">
                <div className="text-opacity-80 my-auto mr-1">-></div>
                <h5 className={expanded ? 'text-blue-500 text-opacity-90 text-lg font-bold' : 'text-gray-500 text-opacity-90 text-lg font-semibold cursor-default'}>{header}</h5>
            </div>
            {expanded && selections.map((selection) => <TopicSelection selection={selection} />)}
        </div>
    )
}

const TopicSelection = ({ selection }) => {
    return (
        <div className='flex flex-row items-center justify-evenly mt-1 mr-auto ml-2 transition duration-300 ease-in-out cursor-pointer'>
            <h5 className='text-gray-500 font-semibold tracking-wide mr-auto transition duration-300 ease-in-out hover:text-gray-500 cursor-pointer'>{selection}</h5>
        </div>
    )
}

const ChannelBlock = () => {
    return (
        <div className="flex items-center justify-center h-16 m-0 p-0">
            <h5 className="text-lg tracking-wider font-bold text-gray-400 mr-auto ml-4 my-auto align-middle ">Channels</h5>
        </div>
    )
}

export default function DiscordChannelBar() {
    return (
        <div className="w-80 h-auto m-0 ml-16 bg-gray-800 shadow-lg">
            <ChannelBlock />
            <div className='flex flex-col items-center justify-start'>
                <Dropdown header="Topics" selections={topics} />
                <Dropdown header="Questions" selections={questions} />
                <Dropdown header="Random" selections={random} />
            </div>
        </div>
    )
}