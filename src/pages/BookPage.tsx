import { createSignal, Show } from "solid-js";
import { useParams } from "@solidjs/router";

const MOCK_BOOK = {
  id: "1",
  title: "The Dancing Dragon",
  pages: [
    { content: "Once upon a time, there was a little dragon named Sparkles...", imageUrl: "https://picsum.photos/seed/page1/800/600" },
    { content: "Sparkles loved to dance, but was too shy to show anyone...", imageUrl: "https://picsum.photos/seed/page2/800/600" },
    { content: "One day, she met a group of friendly forest animals...", imageUrl: "https://picsum.photos/seed/page3/800/600" },
    { content: "They encouraged her to join their dance party...", imageUrl: "https://picsum.photos/seed/page4/800/600" },
    { content: "And from that day on, Sparkles danced with joy!", imageUrl: "https://picsum.photos/seed/page5/800/600" }
  ]
};

export default function BookPage() {
  const params = useParams();
  const [currentPage, setCurrentPage] = createSignal(0);

  const nextPage = () => {
    if (currentPage() < MOCK_BOOK.pages.length - 1) {
      setCurrentPage(currentPage() + 1);
    }
  };

  const previousPage = () => {
    if (currentPage() > 0) {
      setCurrentPage(currentPage() - 1);
    }
  };

  return (
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-comic text-center text-kiddy-primary mb-8">
        {MOCK_BOOK.title}
      </h1>
      
      <div class="relative bg-white rounded-lg shadow-2xl p-8">
        <div class="page-turn">
          <img 
            src={MOCK_BOOK.pages[currentPage()].imageUrl} 
            alt={`Page ${currentPage() + 1}`}
            class="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p class="text-xl font-comic text-center py-4">
            {MOCK_BOOK.pages[currentPage()].content}
          </p>
        </div>

        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
          <Show when={currentPage() > 0}>
            <button 
              onClick={previousPage}
              class="btn-secondary"
            >
              ← Previous Page
            </button>
          </Show>
          
          <Show when={currentPage() < MOCK_BOOK.pages.length - 1}>
            <button 
              onClick={nextPage}
              class="btn-primary"
            >
              Next Page →
            </button>
          </Show>
        </div>

        <div class="absolute bottom-4 right-4 text-gray-500">
          Page {currentPage() + 1} of {MOCK_BOOK.pages.length}
        </div>
      </div>
    </div>
  );
}