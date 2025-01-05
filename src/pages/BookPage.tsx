import { createResource, createSignal, Show } from "solid-js";
import { useParams } from "@solidjs/router";
import { bookService } from "../services/api";

export default function BookPage() {
  const params = useParams();
  const [book] = createResource(() => params.id, bookService.getBook);
  const [currentPage, setCurrentPage] = createSignal(0);

  const pages = () => {
    if (!book()) return [];
    return book()!.content.split('\n\n').filter(p => p.trim());
  };

  return (
      <div class="max-w-5xl mx-auto">
        <Show when={book()} fallback={<div>Loading book...</div>}>
          <h1 class="text-4xl font-comic text-center text-kiddy-primary mb-8">
            {book()?.title}
          </h1>

          <div class="relative bg-[#f8f4e8] rounded-lg shadow-2xl p-8">
            <div class="prose max-w-none">
              {pages()[currentPage()]}
            </div>

            <div class="flex justify-between mt-8">
              <button
                  onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                  disabled={currentPage() === 0}
                  class="btn-secondary"
              >
                Previous Page
              </button>
              <button
                  onClick={() => setCurrentPage(p => Math.min(pages().length - 1, p + 1))}
                  disabled={currentPage() === pages().length - 1}
                  class="btn-primary"
              >
                Next Page
              </button>
            </div>
          </div>
        </Show>
      </div>
  );
}