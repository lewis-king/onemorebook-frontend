import { Component, Show } from "solid-js";
import { Page } from "./Page";
import "./PageTurn.css";

interface BookSpreadProps {
  leftContent?: { content: string; imageUrl: string };
  rightContent: { content: string; imageUrl: string };
  nextContent?: { content: string; imageUrl: string };
  isFlipping: boolean;
  direction: 'forward' | 'backward';
}

export const BookSpread: Component<BookSpreadProps> = (props) => {
  return (
    <div class="book-container">
      <div class="page-wrapper flex">
        {/* Left page */}
        <div class="w-1/2 relative">
          <Show when={props.leftContent}>
            <div class="absolute inset-0 bg-white rounded-lg shadow-md p-4">
              <Page content={props.leftContent!.content} imageUrl={props.leftContent!.imageUrl} />
            </div>
          </Show>
        </div>

        {/* Right page with flip effect */}
        <div class="w-1/2 relative">
          <div class={`page ${props.isFlipping ? 'turning' : ''}`}>
            <div class="page-content">
              <Page content={props.rightContent.content} imageUrl={props.rightContent.imageUrl} />
            </div>
            <div class="page-content page-back">
              <Show when={props.nextContent}>
                <Page content={props.nextContent.content} imageUrl={props.nextContent.imageUrl} />
              </Show>
            </div>
          </div>
        </div>

        {/* Book spine shadow */}
        <div class="absolute left-1/2 h-full w-[2px] bg-gradient-to-r from-gray-300 to-transparent"></div>
      </div>
    </div>
  );
};