/* eslint-disable react/prop-types */
import { Timeline } from "./"
import TextScramble from "../utils/TextScramble"

const EventsPage = ({ EventData }) => {
    return (
        <div className="min-h-screen p-8 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <TextScramble text="Events" />
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

export default EventsPage
