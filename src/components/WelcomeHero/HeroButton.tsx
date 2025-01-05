import { Component } from "solid-js";
import { A } from "@solidjs/router";

interface HeroButtonProps {
    href: string;
    children: any;
}

const HeroButton: Component<HeroButtonProps> = (props) => {
    return (
        <A
            href={props.href}
            class="inline-block mt-6 bg-kiddy-accent text-kiddy-primary
             font-comic text-xl px-8 py-3 rounded-full
             transform hover:scale-110 transition-transform
             shadow-lg hover:shadow-xl relative overflow-hidden
             group"
        >
      <span class="relative z-10 flex items-center gap-2">
        {props.children}
      </span>
            <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </A>
    );
};

export default HeroButton;