/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Text = ({
    Text,
    width = "225px",
    height = "110px",
    fontSize = "40px",
}) => {
    useEffect(() => {
        // Register ScrollTrigger with GSAP
        gsap.registerPlugin(ScrollTrigger)

        // Trigger animation when element comes into view
        ScrollTrigger.create({
            trigger: ".load-container",
            start: "top 75%", // Adjust based on where you want the animation to start
            scrub: true,
            onEnter: () => document.querySelector("#active").beginElement(),
            onEnterBack: () => document.querySelector("#active").beginElement(),
        })
    }, [])

    return (
        <div className="flex z-10 items-center justify-center h-screen bg-transparent load-container">
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
                        id="active"
                        attributeName="stroke-dashoffset"
                        from="1000"
                        to="0"
                        dur="8s"
                        fill="freeze"
                    />
                </text>
            </svg>
        </div>
    )
}

export default Text