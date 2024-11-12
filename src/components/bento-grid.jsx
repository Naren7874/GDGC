/* eslint-disable react/prop-types */
import { cn } from "../lib/utils"

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    )
}

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    socialMedia,
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ",
                className
            )}
        >
            <div className="relative w-full  overflow-hidden rounded-md">
                {header && (
                    <img
                        src={header}
                        alt=""
                        className="object-cover w-full max-h-[330px] md: h-[450px]"
                    />
                )}
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 flex">
                    {icon} {description}
                </div>
            </div>
            {socialMedia}
        </div>
    )
}
