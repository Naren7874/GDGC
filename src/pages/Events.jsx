import EventsPage from "../components/eventPage"

const Events = () => {
    const EventData = [
        {
            title: "Figma Fusion: Where Ideas Take Shape",
            description: `Join us for an exciting event exploring the power of Figma, a leading design tool. Participate in a design challenge, showcase your creativity, and win amazing prizes! 
Total attendees: 95.`,
            images: ["figma.jpeg", "figma.jpeg", "figma.jpeg", "figma.jpeg"],
            time: "15 September 2024",
        },
        {
            title: "Gen AI Study Jam",
            description: `Gen AI Study Jams will provide students an opportunity to kickstart their learning on Gen AI technology, and implement the learning by enabling them to build projects on the Google Cloud console.
Duration: 1 October - 10 November 2024`,
            images: ["genAi.jpeg", "genAi.jpeg", "genAi.jpeg", "genAi.jpeg"],

            time: "1 Oct - 15 Nov 2024",
        },
        {
            title: "Azure Cloud Computing Event",
            description: `In Azure Cloud Computing event, attendees received an introduction to fundamental cloud services. A Microsoft expert led the session, offering practical insights on real-world applications and best practices for cloud adoption.`,
            images: [
                "/azure.jpg",
                "/azure.jpg",
                "/azure.jpg",
                "/azure.jpg",
                "/azure.jpg",
            ],
            time: "20 November 2024",
        },
    ]
    return (
        <div>
            <EventsPage EventData={EventData} />
        </div>
    )
}

export default Events
