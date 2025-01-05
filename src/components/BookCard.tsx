import { Component } from "solid-js";
import { A } from "@solidjs/router";
import StarRating from "./StarRating";
import { Book } from "../types/book";

interface BookCardProps extends Book {
    onUpvote: (id: string) => void;
}

const BookCard: Component<BookCardProps> = (props) => {
    return (
        <div class="book-card bg-white rounded-2xl overflow-hidden shadow-xl
                hover:shadow-2xl transition-all duration-300
                transform hover:-translate-y-2 hover:rotate-2">
            <A href={`/book/${props.id}`}>
                <div class="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={props.coverImage.url}
                        alt={props.title}
                        class="w-full h-full object-contain bg-gray-50"
                    />
                    <div class="absolute top-3 right-3">
                        <StarRating
                            stars={props.stars}
                            onUpvote={(e) => {
                                e.preventDefault();
                                props.onUpvote(props.id);
                            }}
                        />
                    </div>
                </div>

                <div class="p-6">
                    <h3 class="text-2xl font-comic text-kiddy-primary mb-2
                     group-hover:text-kiddy-secondary transition-colors">
                        {props.title}
                    </h3>
                    <p class="text-gray-600 font-rounded">
                        Theme: {props.metadata.theme}
                    </p>
                    <p class="text-sm text-gray-500 mt-2">
                        Age Range: {props.metadata.ageRange}
                    </p>

                    <button class="mt-4 w-full bg-kiddy-accent text-kiddy-primary
                         font-comic py-2 rounded-full transform
                         transition-transform group-hover:scale-105">
                        Read Now! 📖
                    </button>
                </div>
            </A>
        </div>
    );
};

export default BookCard;