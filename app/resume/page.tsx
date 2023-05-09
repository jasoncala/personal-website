import Image from "next/image";
import Experience from "../components/Experience";

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
                <Image src="/youngjason.png" alt="picture of me" height={300} width={300} className="pt-4" />

                <h1 className="pt-4">Developer interested in all aspects of software engineering and potential further studies.</h1>
                <h1>I am passionate about learning and always challenging myself.</h1>
            </div>

            <div className="flex flex-col text-center justify-center items-center pt-8">
                <h1 className="text-3xl 2xl:text-4xl py-2 font-roboto">Education</h1>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center pt-4 md:space-x-6 pb-16">

                <div className="block rounded-3xl w-2/3 md:w-1/4 border-2 border-gray-200 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <Image className="rounded-t-3xl w-full pb-2" src="/uwindsor2.jpeg" alt="uwindsor logo" width={500} height={300} />
                    <div className="p-6 pt-0">
                        <h5 className="text-xl font-medium leading-tight tight-neutral-800">
                            Bachelor of Science
                        </h5>
                        <h6 className="p-0">Computer Science & Biology</h6>
                        <p className="mb-4 text-base text-neutral-600">
                            Sept 2019 - June-2024
                        </p>
                        <p
                            className="flex text-white object-center justify-center w-fit bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 text-sm">
                            GPA: 3.88
                        </p>
                    </div>
                </div>
                <div className="block rounded-3xl w-2/3 md:w-1/4 border-2 border-gray-200 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)">
                    <Image className="rounded-t-3xl w-full pt-1 pb-1" src="/icu_japan.jpeg" alt="icu logo" width={500} height={300} />
                    <div className="p-6 pt-0">
                        <h5 className="text-xl font-medium leading-tight tight-neutral-800">
                            Exchange Year
                        </h5>
                        <h6 className="p-0">Tokyo, Japan</h6>
                        <p className="mb-4 text-base text-neutral-600">
                            Sept 2023 - June-2024
                        </p>
                        <p
                            className="flex text-white object-center justify-center w-fit bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 text-sm">
                            GPA: 4.0
                        </p>
                    </div>
                </div>
            </div>

            <Experience />


            <div className="flex flex-col text-center justify-center items-center pt-8">
                <h1 className="text-xl 2xl:text-2xl py-2 font-roboto">Research and Projects coming soon</h1>
            </div>
        </div>
    );
}
