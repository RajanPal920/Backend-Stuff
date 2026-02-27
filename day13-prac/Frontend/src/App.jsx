import routes from "./app.routes.jsx";
import "./style.scss";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { PostProvider } from "./features/post/post.context.jsx";

function App() {
  return (
    <AuthProvider>
      <PostProvider>{routes}</PostProvider>
    </AuthProvider>
  );
}

export default App;
