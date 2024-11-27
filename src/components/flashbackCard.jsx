/* eslint-disable react/prop-types */
"use client"
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from "./ui/animated-modal"
import FlashbackTeam from "./flashbackTeam"

export function FlashbackCard({ title, teamMembers, events }) {
    return (
        <div className="py-20 flex items-center justify-center z-50">
            <Modal>
                <ModalTrigger className="text-white flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        {title}
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        ✈️
                    </div>
                </ModalTrigger>
                <ModalBody className="w-3/4 z-50">
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8 z-50">
                            welcome to FLASHBACK{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                                #{title}
                            </span>
                        </h4>
                        <div className="relative w-full overflow-hidden h-[200px] md:h-[300px]">
                            <div className="absolute flex animate-scroll">
                                {/* First set of cards */}
                                {events.map((evt, idx) => (
                                    <div
                                        key={`card1-${idx}`}
                                        className="flex-shrink-0 mx-2 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 rounded-xl overflow-hidden"
                                    >
                                        <div>
                                            <img
                                                src={evt.image}
                                                alt={evt.title}
                                                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
                                            />
                                            <div className="max-w-[100px] overflow-clip max-h-[100px]">
                                                <p className="text-sm">
                                                    {evt.title}
                                                </p>
                                                <p className="font-thin text-sm">
                                                    {evt.time}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="h-2 w-96"></div>
                                {/* Duplicate set of cards for seamless loop */}
                                {events.map((evt, idx) => (
                                    <div
                                        key={`card2-${idx}`}
                                        className="flex-shrink-0 mx-2 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 rounded-xl overflow-hidden"
                                    >
                                        <div>
                                            <img
                                                src={evt.image}
                                                alt={evt.title}
                                                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
                                            />
                                            <div className="overflow-clip ">
                                                <p className="text-sm">
                                                    {evt.title}
                                                </p>
                                                <p className="font-thin text-sm">
                                                    {evt.time}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="h-2 w-96"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row items-center justify-center mb-10 w-full">
                                <FlashbackTeam items={teamMembers} />
                            </div>
                        </div>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </div>
    )
}
