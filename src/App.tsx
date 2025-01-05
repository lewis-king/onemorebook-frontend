import { Router, Route } from "@solidjs/router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateStoryPage from "./pages/CreateStoryPage";
import BookPage from "./pages/BookPage";

function App() {
  return (
        <div class="min-h-screen bg-kiddy-background">
          {/*<Navbar />*/}
          <main class="container mx-auto px-4 py-8">
            <Router>

            <Route path="/" component={HomePage} />
            <Route path="/create" component={CreateStoryPage} />
            <Route path="/book/:id" component={BookPage} />
            </Router>

          </main>
        </div>
  );
}

export default App;