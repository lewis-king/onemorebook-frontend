import { Component } from "solid-js";
import { A } from "@solidjs/router";

const WelcomeHero: Component = () => {
  return (
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-kiddy-primary to-kiddy-secondary p-8 mb-12">
      <div class="relative z-10">
        <h1 class="text-5xl font-comic text-white mb-4 animate-float">
          Welcome to Your Story Adventure! ✨
        </h1>
        <p class="text-xl text-white/90 font-rounded max-w-2xl">
          Discover magical tales where dragons dance, space kitties explore, 
          and vegetables come alive! Every story is a new adventure waiting for you.
        </p>
        <A href="/create" class="inline-block mt-6 bg-kiddy-accent text-kiddy-primary
                                font-comic text-xl px-8 py-3 rounded-full
                                transform hover:scale-110 transition-transform
                                shadow-lg hover:shadow-xl">
          Create Your Own Story! 🌟
        </A>
      </div>
      
      {/* Floating decorative elements */}
      <div class="absolute top-4 right-4 text-6xl animate-float">🐉</div>
      <div class="absolute bottom-4 right-20 text-5xl animate-float" style="animation-delay: -2s">✨</div>
      <div class="absolute top-12 right-32 text-4xl animate-float" style="animation-delay: -4s">🌟</div>
    </div>
  );
};

export default WelcomeHero;