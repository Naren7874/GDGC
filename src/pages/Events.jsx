import { Timeline } from "../components"
import { Text } from "../components" // Importing your custom Text component

const Events = () => {
    const EventData = [
        {
            title: "Figma Fusion: Where Ideas Take Shape",
            description: `Join us for an exciting event exploring the power of Figma, a leading design tool. Participate in a design challenge, showcase your creativity, and win amazing prizes! 
Total attendees: 95.`,
            images: ["/azure.jpg", "genAi.jpeg", "figma.jpeg", "figma.jpeg"],
            time: "15 September 2024",
        },
        {
            title: "Gen AI Study Jam",
            description: `Gen AI Study Jams will provide students an opportunity to kickstart their learning on Gen AI technology, and implement the learning by enabling them to build projects on the Google Cloud console.
Duration: 1 October - 10 November 2024`,
            images: ["/azure.jpg", "genAi.jpeg", "figma.jpeg", "figma.jpeg"],
            time: "1 October - 10 November 2024",
        },
        {
            title: "Azure Cloud Computing Event",
            description: `In Azure Cloud Computing event, attendees received an introduction to fundamental cloud services. A Microsoft expert led the session, offering practical insights on real-world applications and best practices for cloud adoption.`,
            images: ["/azure.jpg", "genAi.jpeg", "figma.jpeg", "figma.jpeg"],
            time: "20 November 2024",
        },
    ]

    return (
        <div className="min-h-screen p-8 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <Text
                    Text="Events"
                    width="50vw"
                    height="29vh"
                    fontSize="100px"
                />
                <Timeline
                    data={EventData.map((event) => ({
                        title: event.time,
                        content: (
                            <div>
                                <h2 className="text-xl font-bold mb-2">
                                    {event.title}
                                </h2>
                                <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
                                    {event.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {event.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${event.title} image ${
                                                index + 1
                                            }`}
                                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                                        />
                                    ))}
                                </div>
                            </div>
                        ),
                    }))}
                />
            </div>
        </div>
    )
}

export default Events
