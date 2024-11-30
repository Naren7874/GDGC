import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import { GoogleGeminiEffect } from "../components"
const HomePage = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2])
    const pathLengthSecond = useTransform(
        scrollYProgress,
        [0, 0.8],
        [0.15, 1.2]
    )
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2])
    const pathLengthFourth = useTransform(
        scrollYProgress,
        [0, 0.8],
        [0.05, 1.2]
    )
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2])

    const [isFixed, setIsFixed] = useState(true) // Track if the div should be fixed or not

    useEffect(() => {
        const handleScroll = () => {
            const parent = document.getElementById("parent")
            const fixedDiv = document.getElementById("fixedDiv")

            if (parent && fixedDiv) {
                const parentRect = parent.getBoundingClientRect()
                const offset = 500
                const shouldFix =
                    parentRect.top <= 0 &&
                    parentRect.bottom  >= fixedDiv.offsetHeight + offset

                setIsFixed(shouldFix)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative h-[300vh] overflow-clip w-full "
            id="parent"
        >
            {/* Sticky container that will stop at the end of parent */}
            <div
                id="fixedDiv"
                className={`${
                    isFixed ? "fixed " : "absolute bottom-0 left-0"
                } left-0`}
            >
                <GoogleGeminiEffect
                    pathLengths={[
                        pathLengthFirst,
                        pathLengthSecond,
                        pathLengthThird,
                        pathLengthFourth,
                        pathLengthFifth,
                    ]}
                />
            </div>
        </div>
    )
}

export default HomePage
