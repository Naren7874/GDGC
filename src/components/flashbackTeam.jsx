/* eslint-disable react/prop-types */
import { useState } from "react"
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion"

const FlashbackTeam = ({ items }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const springConfig = { stiffness: 100, damping: 5 }
    const x = useMotionValue(0)
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    )

    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    )

    const handleMouseMove = (event) => {
        const halfWidth = event.target.offsetWidth / 2
        x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
    }

    return (
        <div className="flex flex-wrap justify-center py-10">
            {items.map((item, idx) => (
                <div
                    className="relative group -mr-4"
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="popLayout">
                        {hoveredIndex === idx && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 10,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                            >
                                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                                <div className="font-bold text-white relative z-30 text-base">
                                    {item.name}
                                </div>
                                <div className="text-white text-xs">
                                    {item.role}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <img
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={item.imageUrl}
                        alt={item.name}
                        className="object-cover !m-0 !p-0 object-top rounded-full h-24 w-24 border-2 group-hover:scale-110 group-hover:z-30 border-white relative transition-transform duration-500"
                    />
                </div>
            ))}
        </div>
    )
}

export default FlashbackTeam