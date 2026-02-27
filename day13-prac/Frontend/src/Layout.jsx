import { Outlet } from "react-router-dom";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { PostProvider } from "./features/post/post.context.jsx";

const Layout = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <Outlet />
      </PostProvider>
    </AuthProvider>
  );
};

export default Layout;
