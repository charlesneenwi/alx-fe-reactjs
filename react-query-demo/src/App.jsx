import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShowPosts(!showPosts)}>
        Toggle Posts Component
      </button>

      {showPosts && <PostsComponent />}
    </QueryClientProvider>
  );
}

export default App;