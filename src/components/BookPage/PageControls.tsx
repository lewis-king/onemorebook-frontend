import { Component, Show } from "solid-js";

interface PageControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const PageControls: Component<PageControlsProps> = (props) => {
  return (
    <div class="absolute bottom-4 left-0 right-0">
      <div class="flex justify-center space-x-4">
        <Show when={props.currentPage > 0}>
          <button 
            onClick={props.onPrevious}
            class="btn-secondary transform transition-transform hover:scale-105"
          >
            ← Previous Page
          </button>
        </Show>
        
        <Show when={props.currentPage < props.totalPages - 1}>
          <button 
            onClick={props.onNext}
            class="btn-primary transform transition-transform hover:scale-105"
          >
            Next Page →
          </button>
        </Show>
      </div>
      
      <div class="absolute bottom-0 right-4 text-gray-500">
        Page {props.currentPage + 1} of {props.totalPages}
      </div>
    </div>
  );
};

export default PageControls;