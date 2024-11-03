import Text from "../components/textScroll"

const About = () => {
    return (
        <div className="flex items-center justify-center flex-col min-h-screen">
            <Text Text="About us" width="50vw" height="29vh" fontSize="100px" />
            <div className="  text-white py-12 px-8 flex flex-col gap-8">
                {/* Cards for Connect, Learn, and Grow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#E84336]">
                            Connect
                        </h3>

                        <p className="text-gray-300">
                            Meet local developers and technologists. All are
                            welcome, including those with unique backgrounds and
                            from various companies and industries.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#00A150]">
                            Learn
                        </h3>
                        <p className="text-gray-300">
                            Learn about a range of technical topics and gain new
                            skills through hands-on workshops, training, events,
                            talks, and meetups, both online and in person.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold mb-4 text-[#F9BA08]">
                            Grow
                        </h3>
                        <p className="text-gray-300">
                            Apply your knowledge and connections to build great
                            products, advance your skills, career, and network.
                            Help your community grow, too.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        Join a chapter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
