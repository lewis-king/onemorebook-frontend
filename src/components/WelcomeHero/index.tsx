import { Component } from "solid-js";
import FloatingEmoji from "./FloatingEmoji";
import HeroButton from "./HeroButton";

const WelcomeHero: Component = () => {
    return (
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-kiddy-primary via-[#FF8E8E] to-kiddy-secondary p-4 md:p-6">
            <div class="relative z-10 max-w-3xl py-4 md:py-6">
                <h1 class="text-4xl md:text-5xl font-comic text-white mb-3 leading-tight">
                    "One More Book..."
                </h1>

                <p class="text-base md:text-lg text-white/90 font-rounded max-w-3xl mb-4 leading-relaxed">
                    Turn that familiar bedtime moment into endless adventures of your own creation!<br/>
                    Craft tales where dragons soar through starlit skies, brave teddy bears explore secret treasure caves, or pirate cats sail across bubble-filled oceans.<br/>Every story you imagine becomes the next chapter in your collection.
                </p>

                <HeroButton href="/create">
                    Create Your Own Story!
                    <span class="text-2xl">🌟</span>
                </HeroButton>
            </div>

            {/* Right side decorations */}
            <FloatingEmoji emoji="🐉" size="3xl" class="top-4 right-8" />
            <FloatingEmoji emoji="✨" size="2xl" class="top-16 right-24" delay="-2s" />
            <FloatingEmoji emoji="🌈" size="2xl" class="bottom-4 right-16" delay="-1s" />
            <FloatingEmoji emoji="🦄" size="3xl" class="bottom-8 right-32" delay="-3s" />
            <FloatingEmoji emoji="💫" size="2xl" class="top-8 right-48" delay="-2.5s" />

            {/* New emojis for the center-right area */}
            <FloatingEmoji emoji="🌙" size="2xl" class="top-1/2 right-12" delay="-1.5s" />
            <FloatingEmoji emoji="🎨" size="2xl" class="top-1/3 right-28" delay="-3.5s" />
            <FloatingEmoji emoji="🪄" size="2xl" class="top-2/3 right-40" delay="-2.8s" />

            {/* Background effects */}
            <div class="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
        </div>
    );
};

export default WelcomeHero;