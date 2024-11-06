/* eslint-disable no-unused-vars */
import React from "react"
import TextScramble from "../utils/TextScramble"
import Banner from "../components/Banner"

const HomePage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            {/* <TextScramble text="Home Page" /> */}
            <Banner/>
        </div>
    )
}

export default HomePage
