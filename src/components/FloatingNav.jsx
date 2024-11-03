/* eslint-disable react/prop-types */
import { useState } from "react"
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion"
import { Link } from "react-router-dom"
import { cn } from "../utils/cn" // Assuming the cn utility is in utils/cn.js

const FloatingNav = ({ navItems, className }) => {
    const { scrollYProgress } = useScroll()
    const [visible, setVisible] = useState(false)

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const direction = current - scrollYProgress.getPrevious()
            if (scrollYProgress.get() < 0.05) {
                setVisible(false)
            } else {
                setVisible(direction < 0) // Show when scrolling up, hide when scrolling down
            }
        }
    })

    return (
        <AnimatePresence mode="wait">
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
                        className
                    )}
                >
                    {navItems.map((navItem, idx) => (
                        <Link
                            key={idx}
                            to={navItem.link}
                            className="relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                        >
                            <span className="block sm:hidden">
                                {navItem.icon}
                            </span>
                            <span className="hidden sm:block text-sm">
                                {navItem.name}
                            </span>
                        </Link>
                    ))}
                    <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                        <span>Login</span>
                        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default FloatingNav
