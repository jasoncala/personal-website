import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pb-8">
      <div className="flex flex-col md:flex-row w-full py-6 bg-cover bg-center" style={{ 
          backgroundImage: `url(/temporary.jpeg)`,
          backgroundSize: `full`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          backgroundPositionY: `53%`,
        }}>
        <div className="flex flex-col w-full md:w-3/5 justify-center py-5 px-3 md:py-0 md:px-0">
          <h1 className="flex justify-start md:justify-center text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white shadow-2xl">I am a</h1>
          <h1 className="flex justify-start md:justify-center text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white shadow-2xl">Software Engineer</h1>
        </div>
        <div className="flex w-0 md:w-2/5 justify-center">
          <Image src="/youngjason.png" 
                 alt="Picture of me!" 
                 width={350} 
                 height={350} 
                 className="rounded-full border-gray-100 border-2 items-center overflow-hidden invisible"/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row font-light lg:px-48 pt-1">
        <div className="flex-row w-full lg:w-4/6 items-center px-4">
          <h1 className="text-3xl 2xl:text-4xl py-2 font-roboto">Hi there!👋🏻</h1>
          <p className="font-light 2xl:text-lg text-md font-roboto">My name is Jason Cala.</p>
          <p className="font-light 2xl:text-lg text-md font-roboto">📚-Computer Science and Biology student at University of Windsor 💻 🧬</p>
          <p className="font-light 2xl:text-lg text-md font-roboto">📍-Tokyo,Japan 🇯🇵</p>
          <p className="font-light 2xl:text-lg text-md font-roboto">I am passionate about Full-Stack, Mobile, AI and ML.</p>
          <p className="pt-4 pb-1 font-roboto">Currently, I am:</p>
          <ul className="px-8 list-disc font-roboto">
            <li>01: Research intern @ Vector Institute</li>
            <li>02: Experimenting with Nextjs & Tailwind</li>
            <li>03: Learning Japanese</li>
          </ul>
        </div>
        <div className="flex-row w-full lg:w-2/6 items-center px-4">
          <h1 className="text-3xl py-2 font-roboto">Links</h1>
          <div className="flex w-full space-x-2 py-1 flex-wrap justify-center">
            <button 
              type="button"
              className="mb-2 flex rounded-full px-4 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: `#333` }}
              >
              <a href="https://github.com/jasoncala" className="flex"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Github
              </a>
            </button>
            <button 
              type="button"
              className="mb-2 flex rounded-full px-4 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: `#0077b5` }}
              >
              <a href="https://www.linkedin.com/in/jason-cala" className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  LinkedIn
              </a>
            </button>
            <button 
              type="button"
              className="mb-2 inline-block rounded-full px-4 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: `#ea4335` }}
              >
                <a href="mailto:jasoncala@hotmail.com" className="flex">
                  <p className="whitespace-nowrap">✉️ Email</p>
                </a>
            </button>
          </div>
          <h1 className="text-3xl py-2 font-roboto">About Me</h1>
          <p className="pb-1 font-roboto">Click below for:</p>
          <ul className="px-8 list-disc font-roboto">
            <li>My current top songs! 🎵🎵</li>
            <li>My reading list 📖</li>
            <li>A surprise (cat pics) 🤔</li>
          </ul>
          
        </div>

      </div>
    </main>
  )
}
