import Image from "next/image";

export default function Resume() {
    return (
        <div>
            <div className="flex flex-col text-center justify-center items-center pt-8">
                <h1 className="text-4xl 2xl:text-5xl py-2 font-roboto">
                    Welcome to my Resume
                </h1>
                <h1 className="pb-2">For a quick download click below:</h1>
                <button className="flex text-white justify-center w-fit bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-md">
                    Download Resume
                </button>
            </div>
            <div className="flex flex-col text-center justify-center items-center pt-8">
                <h1 className="text-3xl 2xl:text-4xl py-2 font-roboto">Education</h1>
                <section className="text-gray-600">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 w-full">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs font-medium text-gray-400 mb-1">
                                        UNDERGRADUATE
                                    </h2>
                                    <h1 className="sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                        Bachelor of Science
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        Computer Science & Biology
                                    </p>
                                    <p className="leading-relaxed mb-3">University of Windsor</p>
                                    <p className="leading-relaxed mb-3">2019-2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="flex flex-col text-center justify-center items-center pt-8">
                <h1 className="text-3xl 2xl:text-4xl py-2 font-roboto">Experience</h1>
            </div>

            <div className="flex flex-col text-center justify-center items-center pt-8">
                <h1 className="text-3xl 2xl:text-4xl py-2 font-roboto">Research</h1>
            </div>

            <div className="flex flex-col text-center justify-center items-center pt-8">
                <h1 className="text-3xl 2xl:text-4xl py-2 font-roboto">Projects</h1>
            </div>
        </div>
    );
}
