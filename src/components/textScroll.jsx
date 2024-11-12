/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const Text = ({
    Text,
    width = "225px",
    height = "110px",
    fontSize = "30px",
}) => {
    const [inView, setInView] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true)
                    }
                })
            },
            { threshold: 0.1 } // Trigger when 30% of the component is visible
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    return (
        <motion.div
            ref={containerRef}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex z-10 items-center justify-center h-screen bg-transparent load-container"
            style={{ transformOrigin: "center" }}
        >
            <svg width={width} height={height} viewBox="0 0 500 200">
                <text
                    x="0"
                    y="0"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    style={{ fontSize: fontSize }}
                    className="font-bold font-spartan leading-tight"
                >
                    <tspan x="0" dy="100">
                        {Text}
                    </tspan>
                    <animate
                        attributeName="stroke-dashoffset"
                        from="1000"
                        to="0"
                        dur="4s"
                        repeatCount="indefinite" // Loop the stroke animation indefinitely
                    />
                </text>
            </svg>
        </motion.div>
    )
}

export default Text
