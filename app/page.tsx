import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex w-full pb-10" style={{ 
          paddingBottom: `aspect-ratio(1920/900) * 100%`,
          backgroundImage: `url(/croppedtrain.gif)`,
          backgroundSize: `full`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
        }}>
        <div className="flex w-3/5 items-center justify-center text-center">
          <h1 className="py-16 pb-6 text-3xl font-bold">Animated text here</h1>
        </div>
        <div className="flex w-2/5 justify-center">
          <Image src="/youngjason.png" 
                 alt="Picture of me!" 
                 width={300} 
                 height={300} 
                 className="rounded-full pb-24 pt-32 items-center"/>
        </div>
      </div>
      <div className="flex font-light px-48 pt-1">
        <div className="flex-row w-4/6 items-center px-4">
          <h1 className="text-4xl py-2">Hi there!</h1>
          <p className="font-light">My name is Jason Cala. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum atque quam magnam aspernatur minima cum ipsum dolorum nulla amet, quisquam ullam officiis. Suscipit laboriosam fuga tenetur labore, cumque quaerat itaque.
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda voluptatibus rerum, sit vero iste nesciunt beatae consectetur delectus dolores iure quaerat blanditiis laudantium accusantium temporibus, id doloremque culpa quam vel!</p>
          <p className="pt-4 pb-1">Currently, I am:</p>
          <ul className="px-8 list-disc">
            <li>01: Working on my personal website</li>
            <li>02: Learning Next.js</li>
            <li>03: Learning Tailwind CSS</li>
          </ul>
          <p className="pt-24">Add footer</p>
        </div>
        <div className="flex-row w-2/6 items-center px-4">
          <h1 className="text-3xl py-2">Links</h1>
          <p>Come say hi :)</p>
          <p>Image shortcuts to links like LI and github</p>
          <p>Email: email@gmail.com</p>
          <p>Spotify listening + goodreads</p>
        </div>

      </div>
    </main>
  )
}
