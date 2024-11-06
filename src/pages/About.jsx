import {
    AcademicCapIcon,
    UsersIcon,
    LightningBoltIcon,
} from "@heroicons/react/solid"
import Text from "../components/textScroll"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GithubGlobe } from "../components"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const cardRefs = useRef([])

    useEffect(() => {
        // Stagger each card animation from left to right when scrolled into view
        gsap.fromTo(
            cardRefs.current,
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                stagger: 0.3,
                scrub: true,
                scrollTrigger: {
                    trigger: cardRefs.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        )
    }, [])

    return (
        <div className="flex items-center justify-center flex-col text-white px-4">
            {/* "About Us" Title */}
            <div className="items-center flex justify-center pl-[5vw]">
                <Text
                    Text="About Us"
                    width="50vw"
                    height="29vh"
                    fontSize="100px"
                />
            </div>

            <div className="w-screen h-screen">
                <GithubGlobe />
            </div>

            <div className="py-4 px-8 flex items-center justify-center flex-col gap-6 max-w-5xl">
                {/* Cards for Connect, Learn, and Grow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Connect Card */}
                    <div
                        ref={(el) => (cardRefs.current[0] = el)}
                        className="bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center max-w-[450px] mx-auto border border-white/10"
                    >
                        <UsersIcon className="h-12 w-12 text-[#E84336] mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 text-[#E84336]">
                            Connect
                        </h3>
                        <p className="text-gray-200">
                            Network with developers and technologists from
                            various industries. Embrace diversity and make
                            meaningful connections with others in tech.
                        </p>
                    </div>

                    {/* Learn Card */}
                    <div
                        ref={(el) => (cardRefs.current[1] = el)}
                        className="bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center max-w-[450px] mx-auto border border-white/10"
                    >
                        <AcademicCapIcon className="h-12 w-12 text-[#00A150] mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 text-[#00A150]">
                            Learn
                        </h3>
                        <p className="text-gray-200">
                            Expand your knowledge through engaging workshops,
                            insightful talks, and hands-on training, both online
                            and in-person.
                        </p>
                    </div>

                    {/* Grow Card */}
                    <div
                        ref={(el) => (cardRefs.current[2] = el)}
                        className="bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center max-w-[450px] mx-auto border border-white/10"
                    >
                        <LightningBoltIcon className="h-12 w-12 text-[#F9BA08] mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold mb-2 text-[#F9BA08]">
                            Grow
                        </h3>
                        <p className="text-gray-200">
                            Apply your skills to make an impact. Build great
                            products, advance your career, and contribute to the
                            growth of your tech community.
                        </p>
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-6 flex justify-center items-center">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-lg">
                        Join a Chapter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
