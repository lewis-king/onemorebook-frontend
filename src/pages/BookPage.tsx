import { createResource, createSignal } from "solid-js";
import { useParams } from "@solidjs/router";
import { bookService } from "../services/api";
import BookContent from "../components/BookPage/BookContent";
import PageControls from "../components/BookPage/PageControls";
import BookMetadata from "../components/BookPage/BookMetadata";

export default function BookPage() {
  const params = useParams();
  const [book, { refetch }] = createResource(() => params.id, bookService.getBook);
  const [currentPage, setCurrentPage] = createSignal(0);

  const pages = () => {
    if (!book()) return [];
    return ['cover', ...book()!.content.split('PAGE_BREAK')];
  };

  const handleUpvote = async (id: string, currentStars: number) => {
    await bookService.updateStars(id, currentStars);
    refetch();
  };

  return (
      <div class="max-w-4xl mx-auto px-4">
        {book() && (
            <>
              <BookMetadata
                  book={book()!}
                  onUpvote={handleUpvote}
              />

              <div class="bg-[#f8f4e8] rounded-lg shadow-2xl p-8">
                <BookContent
                    content={pages()[currentPage()]}
                    coverImage={book()!.coverImage.url}
                    showCover={currentPage() === 0}
                />

                <PageControls
                    currentPage={currentPage()}
                    totalPages={pages().length}
                    onPrevious={() => setCurrentPage(p => Math.max(0, p - 1))}
                    onNext={() => setCurrentPage(p => Math.min(pages().length - 1, p + 1))}
                />
              </div>
            </>
        )}
      </div>
  );
}