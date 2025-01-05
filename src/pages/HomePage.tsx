import { createSignal } from "solid-js";
import BookCard from "../components/BookCard";

const MOCK_BOOKS = [
  {
    id: "1",
    title: "The Dancing Dragon",
    summary: "Join Sparkles the dragon on a magical adventure where she learns to dance and make new friends!",
    coverUrl: "https://picsum.photos/seed/book1/400/300",
    upvotes: 156
  },
  {
    id: "2",
    title: "Space Kitty's Journey",
    summary: "Follow Captain Whiskers as she explores the galaxy in her cardboard rocket ship!",
    coverUrl: "https://picsum.photos/seed/book2/400/300",
    upvotes: 142
  },
  {
    id: "3",
    title: "The Magical Garden",
    summary: "Discover the secrets of the enchanted garden where vegetables come to life at night!",
    coverUrl: "https://picsum.photos/seed/book3/400/300",
    upvotes: 98
  }
];

export default function HomePage() {
  const [books] = createSignal(MOCK_BOOKS.sort((a, b) => b.upvotes - a.upvotes));

  return (
    <div class="space-y-8">
      <h1 class="text-4xl font-comic text-center text-kiddy-primary mb-8">
        Magical Stories for Little Dreamers
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books().map(book => (
          <BookCard {...book} />
        ))}
      </div>
    </div>
  );
}