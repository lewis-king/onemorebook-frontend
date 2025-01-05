import { Component } from "solid-js";

interface FloatingEmojiProps {
    emoji: string;
    size: string;
    delay?: string;
    class?: string;
}

const FloatingEmoji: Component<FloatingEmojiProps> = (props) => {
    return (
        <div
            class={`absolute animate-float ${props.class || ''} select-none`}
            style={{
                "animation-delay": props.delay,
                "font-size": getSizeInRem(props.size),
                // Enhanced text rendering
                "text-rendering": "optimizeLegibility",
                "-webkit-font-smoothing": "auto",
                "-moz-osx-font-smoothing": "auto",
                // Remove any transforms that might cause blur
                "will-change": "transform",
                // Ensure pixel-perfect rendering
                "transform": "translateZ(0)",
                // Force GPU acceleration
                "backface-visibility": "hidden"
            }}
            aria-hidden="true"
        >
            {props.emoji}
        </div>
    );
};

// Adjusted sizes for better clarity
function getSizeInRem(size: string): string {
    const sizes = {
        '2xl': '1.75rem',  // Slightly larger for better visibility
        '3xl': '2.25rem',  // Adjusted for clarity
        '4xl': '2.75rem'   // Larger size
    };
    return sizes[size as keyof typeof sizes] || '1.75rem';
}

export default FloatingEmoji;