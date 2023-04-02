import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, PostForm, Prueba } from "./pages";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    
      <div >
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/:id" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
            
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    
  );
}

export default App;
