import { Component } from "solid-js";

interface PageControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const PageControls: Component<PageControlsProps> = (props) => {
  return (
      <div class="flex justify-between items-center mt-8">
        <button
            onClick={props.onPrevious}
            disabled={props.currentPage === 0}
            class="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous Page
        </button>

        <span class="font-comic text-gray-600">
        Page {props.currentPage + 1} of {props.totalPages}
      </span>

        <button
            onClick={props.onNext}
            disabled={props.currentPage === props.totalPages - 1}
            class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Page →
        </button>
      </div>
  );
};

export default PageControls;