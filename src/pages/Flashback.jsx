import TextScramble from "../utils/TextScramble"
import { FlashbackCard } from "../components/flashbackCard"
import { EvervaultCard } from "../components/ui/evervault-card"
const Flashback = () => {

    const team2023 = [
        {
            name: "Abhishek Nalla",
            role: "Lead",
            linkedinUrl: "http://www.linkedin.com/in/abhisheknalla",
            gmailUrl: "",
            githubUrl: "https://github.com/abhinalla003",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824268/wd57kngcujagwldqnmtj.jpg",
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
            name: "Manav Joshi",
            role: "Mentor",
            linkedinUrl: "https://www.linkedin.com/in/manavhjoshi",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731426837/Manav_Joshi_pigcv8.jpg",
        },

        {
            name: "Brijesh Pithadia",
            role: "Creative Designer",
            linkedinUrl:
                "https://in.linkedin.com/in/brijesh-pithadia-87a664196",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731427010/Brijesh_Pithadia_wdp9gi.jpg",
        },

        {
            name: "Lavisha Desai",
            role: "Creative Designer",
            linkedinUrl: "http://www.linkedin.com/in/lavisha-desai-41b027254",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731427095/ULKESH_LAVISHA_o6rpmh.jpg",
        },

        {
            name: "Saniya Masih",
            role: "Creative Designer",
            linkedinUrl: "https://www.linkedin.com/in/saniya-masih-130a44283",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824268/shvpew2oesyk1rdkwjgd.jpg",
        },

        {
            name: "Meet Mistry",
            role: "Publicity Member",
            linkedinUrl: "https://www.linkedin.com/in/meet-mistry-8169a51a2",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731427302/Meet_MISTRY_i2zlgo.jpg",
        },

        {
            name: "Jimmy Dudhwala",
            role: "Publicity Member",
            linkedinUrl: "https://www.linkedin.com/in/jimmy-dudhwala-3b33a5239",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731427435/JIMMY_DUDHWALA_cxnq8g.jpg",
        },

        {
            name: "Vihaa Shah",
            role: "Publicity Member",
            linkedinUrl: "https://www.linkedin.com/in/vihaa-shah-98b71128a",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/driy33xtm/image/upload/v1729824274/eidrhpnxivbomdlyfdkq.jpg",
        },

        {
            name: "Nisharg Soni",
            role: "Tech Specialist",
            linkedinUrl: "https://www.linkedin.com/in/nisharg-soni-b93688289",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731427580/NISHARG_SONI_s6fbe8.jpg",
        },

        {
            name: "Devansh Kansagra",
            role: "Tech Specialist",
            linkedinUrl: "https://linkedin.com/in/devansh-kansagra-34811a269",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731427641/DEVANSH_KANSAGRA_it1adq.jpg",
        },

        {
            name: "Kartavi Desai",
            role: "Content Curator",
            linkedinUrl: "https://www.linkedin.com/in/kartavi-desai-292431263",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731427724/Kartavi_Desai_yaoder.jpg",
        },

        {
            name: "Huzaifa Bharmal",
            role: "Content Curator",
            linkedinUrl:
                "https://www.linkedin.com/in/huzaifa-bharmal-9b5185252",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731427787/HUZAIFA_BHARMAL_shoezx.jpg",
        },

        {
            name: "Yashraj Solanki",
            role: "Content Curator",
            linkedinUrl:
                "https://www.linkedin.com/in/yashraj-solanki-7b7363256",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731427854/Yashraj_Solanki_p98dij.jpg",
        },
    ]

    const team2022 = [
        {
            name: "Manav Joshi",
            role: "Lead",
            linkedinUrl: "https://www.linkedin.com/in/manavhjoshi",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731426837/Manav_Joshi_pigcv8.jpg",
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
            name: "Aastha Gupta",
            role: "Mentor",
            linkedinUrl: "https://www.linkedin.com/in/aastha1208/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731428433/Aastha_Gupta_bl20y6.jpg",
        },

        {
            name: "Megh Shah",
            role: "Graphics Designer",
            linkedinUrl: "https://www.linkedin.com/in/megh-shah-a19813205",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731428505/Megh_Shah_zaxvol.jpg ",
        },

        {
            name: "Nishant Gajjar",
            role: "Publicity Member",
            linkedinUrl: "https://www.linkedin.com/in/nishant-gajjar-605a771a4",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731432166/Nishant_Gajjar_v1htoo.jpg",
        },

        {
            name: "Prachi Mistry",
            role: "Publicity Member",
            linkedinUrl: "https://www.linkedin.com/in/prachi-mistry-21b822233",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731432232/Prachi_ild89z.jpg",
        },

        {
            name: "Vraj Upadhyay",
            role: "Publicity Member",
            linkedinUrl: "https://www.linkedin.com/in/vraj-u-249530238",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731432307/vraj_raadg7.jpg",
        },

        {
            name: "Mohammad Chati",
            role: "Tech Person",
            linkedinUrl: "https://www.linkedin.com/in/mohammad-chati",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731436291/Mohammad_Chati_vggwfb.jpg",
        },

        {
            name: "Rishabh Parmar",
            role: "Tech Person",
            linkedinUrl: "https://www.linkedin.com/in/rishabh-parmar-650541200",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731436354/Rishabh_scxl7r.jpg",
        },

        {
            name: "Khushi Rangoonwala",
            role: "Content Writer",
            linkedinUrl:
                "https://www.linkedin.com/in/khushi-rangoonwala-23738823a",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731436428/Khushi_dz846k.jpg",
        },

        {
            name: "Tilak Brahmbhatt",
            role: "Content Writer",
            linkedinUrl:
                "https://www.linkedin.com/in/tilak-brahmbhatt-311825212",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731436548/download_rwh9rl.jpg",
        },
    ]

    const team2021 = [
        {
            name: "Aastha Gupta",
            role: "Mentor",
            linkedinUrl: "https://www.linkedin.com/in/aastha1208/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731428433/Aastha_Gupta_bl20y6.jpg",
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
            name: "Jainil Shah",
            role: "Head Organizer",
            linkedinUrl: "https://www.linkedin.com/in/jainil-shah-83bbb0196/",
            gmailUrl: "#",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437064/Jainil_Shah_ss07y9.jpg",
        },

        {
            name: "Akshat Trivedi",
            role: "Head Organizer",
            linkedinUrl: "https://www.linkedin.com/in/akshat-trivedi-9092981ba",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437067/Akshat_Trivedi_fjxmw7.jpg",
        },

        {
            name: "Jay Patel",
            role: "Mentor",
            linkedinUrl: "https://www.linkedin.com/in/jay-patel-281220/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437212/Jay_Patel_Profile_sfybf8.jpg",
        },

        {
            name: "Khushi Mehta",
            role: "Chief Advisor",
            linkedinUrl: "https://www.linkedin.com/in/khushi-mehta-6b5b771a3/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437452/download_mzm2cq.jpg",
        },

        {
            name: "Abhishek Khuthiya",
            role: "Chief Advisor",
            linkedinUrl:
                "https://www.linkedin.com/in/abhishek-khuthiya-3430b61a8/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437534/Abhishek_Khuthiya_uvujwn.jpg",
        },

        {
            name: "Smit Bhansali",
            role: "Tech Geek",
            linkedinUrl: "https://www.linkedin.com/in/smit-bhansali/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437601/Smit_Bhansali_elewuz.jpg",
        },

        {
            name: "Vatsal Dhupelia",
            role: "Tech Geek",
            linkedinUrl:
                "https://www.linkedin.com/in/vatsal-dhupelia-7990a0200",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437695/Vatsal_Dhupelia_Profile_uas8gd.jpg",
        },

        {
            name: "Mann Desai",
            role: "Tech Geek",
            linkedinUrl: "https://www.linkedin.com/in/mann-desai-2962a11bb",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437778/Mann_Desai_qdavct.jpg",
        },

        {
            name: "Honey Rathod",
            role: "Graphics Buddy",
            linkedinUrl: "https://www.linkedin.com/in/honey-r-ab8848197/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437838/Honey_ofxuyg.jpg",
        },

        {
            name: "Megh Shah",
            role: "Graphics Buddy",
            linkedinUrl: "https://www.linkedin.com/in/megh-shah-a19813205",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731428505/Megh_Shah_zaxvol.jpg ",
        },

        {
            name: "Prathviraj Singh",
            role: "Public Relations",
            linkedinUrl:
                "https://www.linkedin.com/in/prathviraj-singh-384b70211/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437987/Cherish_Vaidya_qtni1x.jpg",
        },

        {
            name: "Manav Joshi",
            role: "Public Relations",
            linkedinUrl: "https://www.linkedin.com/in/manavhjoshi",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731426837/Manav_Joshi_pigcv8.jpg",
        },

        {
            name: "Nishant Gajjar",
            role: "Public Relations",
            linkedinUrl: "https://www.linkedin.com/in/nishant-gajjar-605a771a4",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731432166/Nishant_Gajjar_v1htoo.jpg",
        },

        {
            name: "Devanshi Pandya",
            role: "Doc Professional",
            linkedinUrl:
                "https://www.linkedin.com/in/devanshi-pandya-611972182",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731438212/download_tlldup.jpg",
        },

        {
            name: "Isha Dave",
            role: "Doc Professional",
            linkedinUrl: "https://www.linkedin.com/in/isha-dave-224165219",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731438308/download_xbnwez.jpg",
        },

        {
            name: "Anisha Singh",
            role: "Creative Writer",
            linkedinUrl: "https://www.linkedin.com/in/anisha-singh-2b6865218",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731438320/download_wutjal.jpg",
        },
    ]

    // eslint-disable-next-line no-unused-vars
    const team2020 = [
        {
            name: "Jay Patel",
            role: "Lead",
            linkedinUrl: "https://www.linkedin.com/in/jay-patel-281220/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437212/Jay_Patel_Profile_sfybf8.jpg",
        },

        {
            name: "Jainil Shah",
            role: "Social Media Manager",
            linkedinUrl: "https://www.linkedin.com/in/jainil-shah-83bbb0196/",
            gmailUrl: "#",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437064/Jainil_Shah_ss07y9.jpg",
        },

        {
            name: "Akshat Trivedi",
            role: "Junior Event Manager",
            linkedinUrl: "https://www.linkedin.com/in/akshat-trivedi-9092981ba",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437067/Akshat_Trivedi_fjxmw7.jpg",
        },

        {
            name: "Meha Dave",
            role: "Senior Event Manager",
            linkedinUrl: "https://www.linkedin.com/in/meha-dave",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731438725/download_yyfplb.jpg",
        },

        {
            name: "Sudeep More",
            role: "Senior Event Manager",
            linkedinUrl: "https://www.linkedin.com/in/sudeep-more-354978172",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731438768/download_lxhnfb.jpg",
        },

        {
            name: "Aastha Gupta",
            role: "Junior Event Manager",
            linkedinUrl: "https://www.linkedin.com/in/aastha1208/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731428433/Aastha_Gupta_bl20y6.jpg",
        },

        {
            name: "Jaimin Shimpi",
            role: "Graphics Head",
            linkedinUrl: "https://www.linkedin.com/in/jaiminshimpi",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731438779/download_aeozzf.jpg",
        },

        {
            name: "Khushi Mehta",
            role: "Content Head",
            linkedinUrl: "https://www.linkedin.com/in/khushi-mehta-6b5b771a3/",
            gmailUrl: "",
            githubUrl: "",
            imageUrl:
                "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731437452/download_mzm2cq.jpg",
        },
    ]

    
    //events 2023
    const events2023 = [
        {
            title: "Solution Fest 2.0",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731950117/Sol_Fest_23_tkgaao.png",
            time: " November 12, 2024",
        },
        {
            title: "Praveshik 2.0",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731948987/praveshik_kub7qi.jpg",
            time: "October 14, 2023",
        },
        {
            title: "Gen AI Summer'24",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731950117/GenAI_23_k2hkck.png",
            time: "September 16, 2023",
        },
    ]

    // events  2022
    const events2022 = [
        {
            title: "Animals and animal welfare",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955137/Animal_welfair_gksc35.png",
            time: "April 15, 2023 Offline",
        },
        {
            title: "Premiere Pro Unleashed - Master Premiere Pro Like A Pro",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955154/premiere_dacvy3.png",
            time: "March 18, 2023 Offline",
        },
        {
            title: "An Industry visit Report at INDO GERMAN TOOL ROOM & PRSSUREJET SYSTEM Pvt. Ltd.",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955319/Indo_mwmmc4.png",
            time: "March 18, 2023 Industry Visit",
        },
        {
            title: "Flutter Forward Extended",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955382/flutter_lhzzda.png",
            time: "March 12, 2023 Virtual",
        },
        {
            title: "Excel Skills for Numerical Methods",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955449/download_hox24e.png",
            time: "March 11, 2023 Workshop",
        },
        {
            title: "Hues of Code - A coding competition",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955534/download_xamvgj.png",
            time: "March 4, 2023 Virtual",
        },
        {
            title: "Technical visit to L&T-CSTI and Science Carnival 2023, Ahmedabad",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955842/gdscicon_kfwsfn.ico",
            time: "March 4, 2023 Technical Visit",
        },
        {
            title: "Applications of Linear Algebra & Fourier series in Engineering",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955557/download_ln7jmm.png",
            time: "March 4, 2023 Offline",
        },
        {
            title: "WebLinguistics-(React JS Workshop)",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955572/download_raokx2.jpg",
            time: "February 4 and 11, 2023 Workshop",
        },
        {
            title: "A GALACTIC ODYSSEY TO GUJARAT COUNCIL OF SCIENCE CITY (GCSC)",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955468/download_wxuws6.jpg",
            time: "January 28, 2023 GCSC Visit",
        },
        {
            title: "An Industry visit at Einfochips",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955513/download_iqtuxf.png",
            time: "January 27, 2023 Industry Visit",
        },
        {
            title: "Hands On IoT",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955500/download_f6w3os.jpg",
            time: "December 9 and 12, 2022 Workshop",
        },
        {
            title: "INTRO TO CLOUD AND GCCP PROGRAM",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955522/download_qvarwk.jpg",
            time: "November 5, 2022 Virtual",
        },
        {
            title: "An Industry visit at JYOTI CNC AUTOMATION Pvt. Ltd.",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955536/download_q0wxhj.png",
            time: "September 17, 2022 Industry Visit",
        },
        {
            title: "Edging Towards a Connected Future",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955842/gdscicon_kfwsfn.ico",
            time: "September 10 and 11, 2022 Offline",
        },
        {
            title: "Kickstart Session on AWS",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955507/download_sbpeky.jpg",
            time: "September 2, 2022 Offline",
        },
        {
            title: "BVM Starters 3.0",
            image: "https://res.cloudinary.com/dvuwb1kip/image/upload/v1731955428/download_uswdxi.jpg",
            time: "August 13, 2022 Virtual",
        },
    ]

    //2021 events
    const events2021 = [
        {
            title: "Praveshik '21 - A Kickstart to Google Technologies with GDSC BVM",
            image: "/flashback/Praveshik.jpg",
            time: "September 13, 2021 Virtual",
            description: "A summarized rundown of all the topics enclosed to give students a better view of what Google Technologies can offer.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-anand-presents-praveshik-21-a-kickstart-to-google-technologies-with-gdsc-bvm/"
        },
        {
            title: "Introduction to Teachable Machine with Google",
            image: "/flashback/Teachable.jpg",
            time: "September 25, 2021 Virtual",
            description: "Session On Techable Machine Learning, a Web-based tool for creating machine learning models easily.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-anand-presents-introduction-to-teachable-machine-with-google/"
        },
        {
            title: "30 Days Of Google Cloud",
            image: "/flashback/30daysofgc.png",
            time: "September 27, 2021 Virtual",
            description: "Google Developer Student Club BVM in collaboration with Google Developers and Qwiklabs brings to you the #30DaysofGoogleCloud, the best place to get started with the Google Cloud Platform.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-anand-presents-1st-study-jam-of-30-days-of-google-cloud/"
        },
        {
            title: "Android Study Jam - Induction Session",
            image: "/flashback/android study jam.jpeg",
            time: "December 01, 2021 Virtual",
            description: "Android Study Jams are community organized study groups of people to do hands-on learning for Android App Development. Android Series is a series of sessions focused specially on learning how to build Android apps without prior Android experience.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-anand-presents-android-study-jams-induction-session/"
        },
        {
            title: "Interactive Session on Blockchain Development",
            image: "/flashback/Blockchain.jpeg",
            time: "January 10, 2022 Virtual",
            description: "Session on Blockchain development, students can able to understand Blockchain Technology, Ethereum Blockchain, Uses of Blockchain, Opportunities in Blockchain.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-anand-presents-interactive-session-on-blockchain-development/"
        },
        {
            title: "Solution Challenge - Intro To Solution Challenge",
            image: "/flashback/solution challange.jpeg",
            time: "January 17, 2022 Virtual",
            description: "An introduction to Solution Challenge which comprised of, a glimpses of the winners of Solution Challenge 2021, 17 Sustainable Development Problems of Solution Challenge 2022, steps to be taken in order to take part in Solution Challenge 2022, Google's commodities for developing solution and important dates and prizes of Solution Challenge 2022.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-anand-presents-intro-to-solution-challenge/"
        },
        {
            title: "Web Chronicles - Into the Vortex of Web Development",
            image: "/flashback/web chronicals.jpeg",
            time: "January 25-30, 2022 Virtual",
            description: "Session covered the basics of Full Stack development through practical sessions and fun quizzes. The participants were also encouraged to complete their day-to-day tasks related to the topics and submit them. A quiz was also conducted at the end of every session.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-anand-presents-web-chronicles-into-the-vortex-of-web-development/"
        },
        {
            title: "Hands-on session with Salesforce",
            image: "/flashback/salesforce.jpeg",
            time: "February 19, 2022 Virtual",
            description: "The speaker explained all concepts of salesforce with a practical demonstration on developer salesforce where participants got chance to do practical with the expert and asked the question if they were stuck anywhere. The session ended with an interactive Q-A session where all participants got a chance to ask the question to the expert.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-anand-presents-hands-on-session-with-salesforce/"
        },
        {
            title: "Solution Fest",
            image: "/flashback/solutionfest.jpeg",
            time: "February 27 - March 6, 2022 Virtual",
            description: "Solution Fest invites and encourages students from all over the campus to build a solution which matches and aims to solve UN's 17 Sustainable Development problems. We are motivating participants to learn new technologies and create solutions for the real-life world and explore your imagination and develop your skills. It is a learn & solve or solve & learn type of hackathon.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-anand-presents-solution-fest/"
        },
        {
            title: "Hands-On Flutter",
            image: "/flashback/e1.jpeg",
            time: "April 2, 2022 Offline",
            description: "On 2nd April 2022, GDSC-BVM organized its very first offline event, Hands-On Flutter with Google Developer Expert under BVM's annual techno-cultural fest UDAAN- The Euphoric Leap and as a part of Flutter Festival 2022. The workshop was beginner-friendly which included the introduction of Flutter from scratch and a creation of a small app using Flutter by the participants."
        }
    ]

    const events2020 = [   
        {
            title: "30 Days of Google Cloud",
            image: "/flashback/30daysofgc.png",
            time: "October 10, 2020 Virtual",
            description: "30 Days of Google Cloud an event that was hosted by google cloud for the member of DSC's across the globe. Due to all those hard work and dedication of BVM was one of the prestigious institutes who was the part of this event.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-30-days-of-google-cloud-cloud-study-jam/"
        },
        {
            title: "Get it Done with Experts",
            image: "/flashback/get it done.jpeg",
            time: "November 15, 2020 Virtual",
            description: "The goal of this webinar is to encourage and inspire young minds all over the country to kick-start their journey in the world of Competitive Programming and to make them realize its importance.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-get-it-done-with-the-experts/"
        },
        {
            title: "Android Study Jam (Introductory Session)",
            image: "/flashback/Asj.jpeg",
            time: "November 26, 2020 Virtual",
            description: "An Info Session about what are Android Study Jams and How the course will be driven at Birla Vishvakarma Mahavidyalaya. By the end of the program the students will be able to have an application of their own and then after that they will be able to share the application on Google Play Store as well as in the form of Link.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-android-study-jams-1-1/"
        },
        {
            title: "Design Web Portfolio on Word-press",
            image: "/flashback/wordpress.jpeg",
            time: "November 28, 2020 Virtual",
            description: "This was a Hands-on Workshop arranged specially for the students of 1st year and 2nd so that they can get hands-on experience on Web Technologies like Domain, Hosting, Word press, Plugins etc. By the end of this program students were ready with their own personal Web Portfolio.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-web-portfolio-using-wordpress/"
        },
        {
            title: "Rejuvenate the Web",
            image: "/flashback/rejuvenate the web.jpeg",
            time: "December 28, 2020 Virtual",
            description: "It was a Virtual Hackathon and the sole purpose of the event was to give students an hands-on exposure to web development technologies. Rejuvenate the look of the website that is more engaging, aesthetic, and also that helps BVM Alumni Association to propose a website for them, by giving an opportunity to the young minds and allow them to showcase their best potential and make a prototype that can help them so forth.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-rejuvenate-the-web/"
        },
        {
            title: "Android Study Jams 3",
            image: "/flashback/ASJ 3.jpeg",
            time: "January 9, 2021 Virtual",
            description: "This specific Program basically focuses more on the practical knowledge and hands-on experience of the members at club on KOTLIN using Android Studio. It was an 1 hour session and the speakers interacted with the students and it was a hands-on session that helped the students to make an application called a to-do list maker.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-android-study-jams-3/"
        },
        {
            title: "Campus to Corporate & Beyond",
            image: "/flashback/campus to corporate and beyond.jpeg",
            time: "January 30, 2021 Virtual",
            description: "This seminar was meant to help the students at BVM College about the importance of networking and what are the necessities and take care of corporate interventions and steps to have a successful and a bright future. Also a QNA was kept after the session in which students asked their doubts regarding placement and eligibility criteria of them getting into Giant companies.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-campus-to-corporate-and-beyond/"
        },
        {
            title: "Two Days National Workshop - Containers",
            image: "/flashback/Redhat.jpeg",
            time: "March 5 & 6, 2021 Virtual",
            description: "Dr.Indrajit Patel highlighted the performance of BVM in context with overall development of students, faculties and contribution of BVM in upliftment of nation at large and congratulated team IT. Er. Nilesh Vaghela had given information about recent trends of IT, containerized services and applications.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-national-workshop-on-container-kubernetes-openshift/"
        },
        {
            title: "HackBash '21",
            image: "/flashback/Hackbash.jpeg",
            time: "March 13 & 14, 2021 Virtual",
            description: "In this event 8 DSC's come together promoting our motto as we profoundly welcome applications from students throughout the country. DSC encourages students to solve real world problems and gives an amazing opportunity to connect with alike minds, learn from them and grow towards their goals in their own way.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-hackbash/"
        },
        {
            title: "Computer Symposium '21",
            image: "/flashback/computer symposium.jpeg",
            time: "March 27 - April 10, 2021 Virtual",
            description: "The Symposium will be covering the domains of Full-Stack Web Development, (HTML, CSS, JavaScript), Machine Learning Basics, Neural Networks, and Introduction to Artificial Intelligence as well as Cloud Computing Technology.",
            eventUrl: "https://gdsc.community.dev/events/details/developer-student-clubs-birla-vishvakarma-mahavidyalaya-engineering-college-presents-computer-symposium-2021/"
        }
    ];

    return (
        <div className="flex items-center justify-center min-h-screen flex-col">
            <TextScramble text="Flashback" />

            <div className="flex  items-center justify-center w-full p-4 gap-6 flex-wrap">
                <div className="h-80 w-80 border-2 border-gray-700  rounded-3xl my-5">
                    <EvervaultCard>
                        <FlashbackCard
                            title={"2023"}
                            teamMembers={team2023}
                            events={events2023}
                        />
                    </EvervaultCard>
                </div>

                <div className="h-80 w-80  border-2 border-gray-700  rounded-3xl my-5">
                    <EvervaultCard>
                        <FlashbackCard
                            title={"2022"}
                            teamMembers={team2022}
                            events={events2022}
                        />
                    </EvervaultCard>
                </div>

                <div className="h-80 w-80  border-2 border-gray-700  rounded-3xl my-5">
                    <EvervaultCard>
                        <FlashbackCard
                            title={"2021"}
                            teamMembers={team2021}
                            events={events2021}
                        />
                    </EvervaultCard>
                </div>

                <div className="h-80 w-80  border-2 border-gray-700  rounded-3xl my-5 mb-10">
                    <EvervaultCard>
                        <FlashbackCard
                            title={"2020"}
                            teamMembers={team2020}
                            events={events2020}
                        />
                    </EvervaultCard>
                </div>
            </div>
        </div>
    )
}

export default Flashback
