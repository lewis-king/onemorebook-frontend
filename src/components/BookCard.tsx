import { Component } from "solid-js";
import { A } from "@solidjs/router";

interface BookCardProps {
  id: string;
  title: string;
  summary: string;
  coverUrl: string;
  upvotes: number;
}

const BookCard: Component<BookCardProps> = (props) => {
  return (
    <A href={`/book/${props.id}`} class="block">
      <div class="book-card bg-white rounded-lg overflow-hidden shadow-md">
        <img src={props.coverUrl} alt={props.title} class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-bold text-gray-800 mb-2">{props.title}</h3>
          <p class="text-gray-600 text-sm mb-4">{props.summary}</p>
          <div class="flex items-center text-kiddy-primary">
            <span>⭐ {props.upvotes} upvotes</span>
          </div>
        </div>
      </div>
    </A>
  );
};

export default BookCard;