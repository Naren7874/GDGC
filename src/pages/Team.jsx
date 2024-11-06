import Text from "../components/textScroll"
import { TeamMemberCard } from "../components"
import { FaLinkedin } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { FaGithub } from "react-icons/fa6"

const Team = () => {
    const teamMembers = [
        // Mentor
        // [
        {
            name: "MNS Arjun",
            role: "Lead",
            linkedinUrl:
                "https://www.linkedin.com/in/m-naga-sai-arjun-a97089328/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729845482/arjun_qatc7b.jpg",
        },

        {
            name: "Dr. Vatsal Shah",
            role: "Faculty Advisor",
            linkedinUrl: "https://www.linkedin.com/in/dr-vatsal-shah-03aa8218b",
            gmailUrl: "https://gdsc.community.dev/u/m6h7ku/",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729826211/vatsal_buxcuc.jpg",
        },

        {
            name: "Prof. Bijal Dalwadi",
            role: "Faculty Co-ordinator",
            linkedinUrl: "#",
            gmailUrl: "#",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729826211/bijal_qyretc.jpg",
        },

        {
            name: "Abhishek Nalla",
            role: "Mentor",
            linkedinUrl: "https://www.linkedin.com/in/abhisheknalla",
            gmailUrl: "nallaabhi2003@gmail.com",
            githubUrl: "https://github.com/abhinalla003",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824268/wd57kngcujagwldqnmtj.jpg",
        },
        // ],

        // // Design & Graphics Experts
        // [
        {
            name: "Om Prajapati",
            role: "Design & Graphics Expert",
            linkedinUrl: "",
            gmailUrl: "theprajapatiom@gmail.com",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729825808/h5vsj7t6ubczeq9sbmsx.jpg",
        },
        {
            name: "Yatri Chhatrala",
            role: "Design & Graphics Expert",
            linkedinUrl: "",
            gmailUrl: "yatrichhatrala@gmail.com",
            githubUrl: "https://github.com/yatri28",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824272/jxfbijj58q9jbbknk8ay.jpg",
        },
        // ],

        // [
        {
            name: "Aditya Patel",
            role: "PR Handler",
            linkedinUrl: "",
            gmailUrl: "adityapatel14062006@gmail.com",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824265/cvkluyrixrstlbpmcpgy.jpg",
        },
        {
            name: "Pratibha Indravath",
            role: "PR Handler",
            linkedinUrl: "",
            gmailUrl: "pratibhaindravath06@gmail.com",
            githubUrl: "https://github.com/Pratibha706",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824269/wbqx8zhrahvqp0freoxm.jpg",
        },
        {
            name: "Vihaa Shah",
            role: "PR Handler",
            linkedinUrl: "",
            gmailUrl: "vihaa.shah23@gmail.com",
            githubUrl: "https://github.com/vihaa23",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824274/eidrhpnxivbomdlyfdkq.jpg",
        },
        // ],

        // // Content Artisans
        // [
        {
            name: "Saniya Masih",
            role: "Content Artisan",
            linkedinUrl: "https://www.linkedin.com/in/saniya-masih-130a44283",
            gmailUrl: "saniyamasih1837@gmail.com",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824268/shvpew2oesyk1rdkwjgd.jpg",
        },
        {
            name: "Tanisha Patel",
            role: "Content Artisan",
            linkedinUrl: "",
            gmailUrl: "p.tanisha257@gmail.com",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824269/cwnliheudipjfuivxyur.jpg",
        },
        // ],

        // [
        {
            name: "Vishal  Jena",
            role: "Associate Lead",
            linkedinUrl: "",
            gmailUrl: "vishal1713vsl@gmail.com",
            githubUrl: "WeR4Code",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824270/amnle1ewk9rlo9i8e1fq.jpg",
        },
        {
            name: "Jaimin Detroja",
            role: "Tech Expert",
            linkedinUrl: "https://www.linkedin.com/in/jaimindetroja345/",
            gmailUrl: "officialjaimin345@gmail.com",
            githubUrl: "https://github.com/JaiminPatel345",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824266/oj2tyvgej9bicbgtml8f.jpg",
        },

        {
            name: "Tanish  Kamdar",
            role: "ML Associate",
            linkedinUrl: "https://www.linkedin.com/in/tanishkamdar/",
            gmailUrl: "tanishkamdar07@gmail.com",
            githubUrl: "https://github.com/Techoder",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824271/ghr5dwd5rq8eo4nrvefi.png",
        },

        {
            name: "Narendra Mali",
            role: "Frontend Associate",
            linkedinUrl: "https://www.linkedin.com/in/mali-narendra-60a508221",
            gmailUrl: "narendramali7874@gmail.com",
            githubUrl: "https://github.com/Naren7874",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729825535/xvksei35uqzgmiqjznad.jpg",
        },

        {
            name: "Rudra Prajapati",
            role: "CyberSecurity Associate",
            linkedinUrl:
                "https://www.linkedin.com/in/rudra-prajapati-b34694274",
            gmailUrl: "prajapatirudra2594@gmail.com",
            githubUrl: "https://github.com/Rudra250",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824273/yynmbm6dzbaxl8p1zqdb.jpg",
        },

        {
            name: "Krish Patel",
            role: "App Dev Associate",
            linkedinUrl: "https://www.linkedin.com/in/krish-patel-84005320b",
            gmailUrl: "krishpatel.dcom46@gmail.com",
            githubUrl: "https://github.com/krishpatel46",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824270/hoindhm5wsj7egp3vfwc.jpg",
        },
        // ],
    ]
    return (
        <div className="flex flex-col items-center text-white px-4">
            {/* "Our Team" Title */}
            <div className="items-center flex justify-center pl-[5vw]">
                <Text
                    Text="Our Team"
                    width="50vw"
                    height="29vh"
                    fontSize="100px"
                />
            </div>
            {/* Team Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-black">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} imageUrl={member.imageUrl}>
                        <p className="text-lg font-bold"> {member.name}</p>
                        <p className="role">
                            {" "}
                            <strong>Role : </strong> {member.role}
                        </p>
                        <div className="social-links flex gap-3">
                            <a
                                href={member.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#55acee] hover:text-[#439fe6]"
                            >
                                <FaLinkedin size="2em" />
                            </a>
                            <a
                                href={member.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#f1f1f1] hover:text-[#b1b1b1]"
                            >
                                <FaGithub size="2em" />
                            </a>
                            <a
                                href={`mailto:${member.gmailUrl}`}
                                className="text-[#E95F54] hover:text-[#b43b33]"
                            >
                                <SiGmail size="2em" />
                            </a>
                        </div>
                    </TeamMemberCard>
                ))}
            </div>
        </div>
    )
}

export default Team
