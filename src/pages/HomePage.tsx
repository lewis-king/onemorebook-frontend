import { createSignal, createResource, For } from "solid-js";
import BookCard from "../components/BookCard";
import CategoryFilter from "../components/CategoryFilter";
import WelcomeHero from "../components/WelcomeHero";
import { bookService } from "../services/api";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = createSignal('all');
  
  const [books, { refetch }] = createResource(bookService.listBooks);

  const handleUpvote = async (id: string) => {
    await bookService.updateStars(id);
    refetch();
  };

  const filteredBooks = () => {
    if (!books()) return [];
    
    const sortedBooks = [...books()].sort((a, b) => b.upvotes - a.upvotes);
    return selectedCategory() === 'all'
      ? sortedBooks
      : sortedBooks.filter(book => book.category === selectedCategory());
  };

  return (
    <div class="space-y-8">
      <WelcomeHero />
      
      <CategoryFilter 
        selected={selectedCategory()} 
        onSelect={setSelectedCategory} 
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Show when={!books.loading} fallback={<div>Loading books...</div>}>
          <For each={filteredBooks()}>
            {book => <BookCard {...book} onUpvote={handleUpvote} />}
          </For>
        </Show>
      </div>
    </div>
  );
}