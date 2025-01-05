import { Component } from "solid-js";
import { Book } from "../../types/book";
import StarRating from "../StarRating";

interface BookMetadataProps {
    book: Book;
    onUpvote: (id: string, currentStars: number) => void;
}

const BookMetadata: Component<BookMetadataProps> = (props) => {
    return (
        <div class="mb-8 text-center">
            <h1 class="text-4xl font-comic text-kiddy-primary mb-4">
                {props.book.title}
            </h1>

            <div class="flex justify-center gap-4 items-center mb-4">
                <span class="text-gray-600">Age Range: {props.book.metadata.ageRange}</span>
                <span>•</span>
                <span class="text-gray-600">Theme: {props.book.metadata.theme}</span>
                <span>•</span>
                <StarRating
                    stars={props.book.stars}
                    onUpvote={(e) => {
                        e.preventDefault();
                        props.onUpvote(props.book.id, props.book.stars);
                    }}
                />
            </div>

            <div class="text-sm text-gray-500">
                Characters: {props.book.metadata.characters.join(', ')}
            </div>
        </div>
    );
};

export default BookMetadata;