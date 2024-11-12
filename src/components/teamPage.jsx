/* eslint-disable react/prop-types */
import Text from "./textScroll"
import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaGithub } from "react-icons/fa6"
import { BentoGrid, BentoGridItem } from "./bento-grid"
import { motion } from "framer-motion"
import TextScramble from "../utils/TextScramble"

const TeamPage = ({ teamMembers }) => {
    const cardVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    }

    return (
        <div className=" flex flex-col justify-center items-center mx-10 my-14">
            <div className="flex flex-col justify-center items-center text-white">
                {/* <Text
                    Text="Our Team"
                    width="50vw"
                    height="29vh"
                    fontSize="100px"
                /> */}
                <TextScramble text="Events" />
            </div>
            <div>
                <BentoGrid className=" mx-auto">
                    {teamMembers.map((item, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.4 }}
                            variants={cardVariants}
                        >
                            <BentoGridItem
                                key={i}
                                title={item.name}
                                description={item.role}
                                header={item.imageUrl}
                                // icon={roleIcons[item.role] || <IconUser />} // Default icon if role not found
                                socialMedia={
                                    <div className="social-links flex gap-3">
                                        <a
                                            href={item.linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#55acee] hover:text-[#439fe6]"
                                        >
                                            <FaLinkedin />
                                        </a>
                                        <a
                                            href={item.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#f1f1f1] hover:text-[#b1b1b1]"
                                        >
                                            <FaGithub />
                                        </a>
                                        <a
                                            href={`mailto:${item.gmailUrl}`}
                                            className="text-[#E95F54] hover:text-[#b43b33]"
                                        >
                                            <SiGmail />
                                        </a>
                                    </div>
                                }
                            />
                        </motion.div>
                    ))}
                </BentoGrid>
            </div>
        </div>
    )
}

export default TeamPage