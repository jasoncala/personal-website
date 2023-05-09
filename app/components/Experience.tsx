"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export default function Experience() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div>
            <h2 className="text-3xl 2xl:text-4xl py-2 w-full text-center mb-2 font-roboto">Experience</h2>

            <div ref={ref} className='w-full md:w-[75%] mx-auto relative'>

                <ul className="w-full flex flex-col items-start justify-between">
                    <li className="my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
                        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                            <h3 className="capitalize font-bold text-2xl">Research Intern <a target="_blank" className="capitalize text-indigo-400">@ Vector Institute</a></h3>
                            <span className="capitalize font-medium text-dark opacity-75">
                                May 2023 - Aug 2023 | Toronto, ON
                            </span>
                            <p className="font-light w-full">
                                I did this and that. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae qui amet tempora autem doloribus necessitatibus cumque officiis facilis minus a, ab nulla, dolorem voluptate eveniet minima ipsam dolorum maiores deserunt!
                            </p>
                        </motion.div>
                    </li>
                    <li className="my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
                        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                            <h3 className="capitalize font-bold text-2xl">Software Engineer Intern <a target="_blank" className="capitalize text-indigo-400">@ Reeldata AI</a></h3>
                            <span className="capitalize font-medium text-dark opacity-75">
                                May 2022 - Apr 2023 | Halifax, NS
                            </span>
                            <p className="font-light w-full">
                                I did this and that. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae qui amet tempora autem doloribus necessitatibus cumque officiis facilis minus a, ab nulla, dolorem voluptate eveniet minima ipsam dolorum maiores deserunt!
                            </p>
                        </motion.div>
                    </li>
                    <li className="my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
                        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                            <h3 className="capitalize font-bold text-2xl">Mobile Developer Intern <a target="_blank" className="capitalize text-indigo-400">@ SEEDA</a></h3>
                            <span className="capitalize font-medium text-dark opacity-75">
                                Jan 2022 - Apr 2022 | Calgary, AB
                            </span>
                            <p className="font-light w-full">
                                I did this and that. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae qui amet tempora autem doloribus necessitatibus cumque officiis facilis minus a, ab nulla, dolorem voluptate eveniet minima ipsam dolorum maiores deserunt!
                            </p>
                        </motion.div>
                    </li>
                    <li className="my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
                        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                            <h3 className="capitalize font-bold text-2xl">Software Developer Intern <a target="_blank" className="capitalize text-indigo-400">@ Glendor Inc</a></h3>
                            <span className="capitalize font-medium text-dark opacity-75">
                                Jan 2022 - Apr 2022 | Draper, UT
                            </span>
                            <p className="font-light w-full">
                                I did this and that. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae qui amet tempora autem doloribus necessitatibus cumque officiis facilis minus a, ab nulla, dolorem voluptate eveniet minima ipsam dolorum maiores deserunt!
                            </p>
                        </motion.div>
                    </li>
                </ul>
            </div>
        </div>
    )
}