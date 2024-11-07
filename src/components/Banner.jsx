import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const bannerVariants = {
    animate: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
        },
    },
}

const letterVariants = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.8,
        },
    },
}

const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true)
        }, 1500)
    }, [])

  return (
    <motion.div 
      className="banner flex flex-col justify-center items-center w-full h-screen p-6 space-y-6  text-white"
      variants={bannerVariants} 
      initial="initial" 
      animate="animate"
    >
      <BannerRowTop title={"Google"+ " " +"Developer"} />
      <BannerRowCenter title={"Groups"} playMarquee={playMarquee} />
      <BannerRowBottom title={"Inspire. Connect. Grow."}  />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
        className="row-title flex space-x-1 text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-wide"
        variants={disabled ? null : bannerVariants}
        initial="initial"
        animate="animate"
    >
        {[...title].map((letter, index) => (
            <motion.span
                key={index}
                className="row-letter inline-block"
                variants={disabled ? null : letterVariants}
            >
                {letter}
            </motion.span>
        ))}
    </motion.span>
)

const BannerRowTop = ({ title }) => {
    return (
        <div className="banner-row flex flex-col items-center space-y-2 text-center">
            <div className="row-col">
                <AnimatedLetters title={title} />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.8,
                    delay: 0.5,
                }}
                className="row-col text-sm md:text-lg font-light text-gray-200"
            >
                <span className="row-message">
                    Empowering developers to learn and grow together.
                </span>
            </motion.div>
        </div>
    )
}

const BannerRowBottom = ({ title }) => {
    return (
        <div className="banner-row center flex flex-col items-center space-y-2 mt-4">
            <AnimatedLetters title={title} />
        </div>
    )
}

const BannerRowCenter = ({ title, playMarquee }) => {
    return (
        <div
            className={`banner-row marquee ${
                playMarquee ? "animate-marquee" : ""
            } overflow-hidden`}
        >
            <motion.div
                initial={{ y: 260 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.8 }}
                className="marquee-inner flex space-x-6 text-2xl md:text-4xl font-semibold text-blue-200"
            >
                <AnimatedLetters title={title} disabled />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} disabled />
                <AnimatedLetters title={title} />
            </motion.div>
        </div>
    )
}

export default Banner
