import Link from "next/link"

export default function Nav(){
    return (
        // create a nav bar with 3 links on the left side
        // 01: Home
        // 02: Resume
        // 03: Blog
        <nav className="fixed w-full z-30 md:bg-opacity-90 bg-white flex justify-between items-center py-6 px-48">
            <div className="flex items-center gap-16">
                <ul className="hidden space-x-16 md:flex">
                    <li>
                        <Link className="px-3 py-2 font-light hover:font-normal" href="/">
                            01: Home
                        </Link>
                    </li>
                    <li><Link className="px-3 py-2 font-light hover:font-normal" href="/resume">02: Resume</Link></li>
                    <li><Link className="px-3 py-2 font-light hover:font-normal" href="/blog">03: Blog</Link></li>
                </ul>
            </div>
        </nav>

    )
}