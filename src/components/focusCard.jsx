/* eslint-disable react/prop-types */
// FocusEffectCard.jsx
import React, { useState } from "react"

const FocusEffectCard = ({
    children,
    index,
    hoveredIndex,
    setHoveredIndex,
}) => {
    const isBlurred = hoveredIndex !== null && hoveredIndex !== index

    return (
        <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`transition-all duration-300 ease-out ${
                isBlurred ? "blur-sm scale-95" : "scale-100"
            }`}
        >
            {children}
        </div>
    )
}

export default FocusEffectCard
