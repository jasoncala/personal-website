import Link from "next/link"

export default function Nav(){
    return (
        // create a nav bar with 3 links on the left side
        // 01: Home
        // 02: Resume
        // 03: Blog
        <header className="text-gray-600">
            <div className="container mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Jason Cala</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" href="/">01: Home</Link>
                    <Link className="mr-5 hover:text-gray-900" href="/resume">02: Resume</Link>
                    <Link className="mr-5 hover:text-gray-900" href="/blog">03: Blog</Link>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Change View
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>

    )
}