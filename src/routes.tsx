import { createBrowserRouter } from "react-router";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import BlogPage from "./pages/blogs/Blog";
import BlogDetail from "./pages/blogs/BlogDetail";
import BlogRootLayout from "./pages/blogs/BlogRootLayout";
import ProductRootLayout from "./pages/products/ProductRootLayout";
import ProductPage from "./pages/products/Product";
import ProductDetail from "./pages/products/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <Error />,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "blogs",
        element: <BlogRootLayout />,
        children: [
          { index: true, element: <BlogPage /> },
          { path: ":blogId", element: <BlogDetail /> },
        ],
      },
      {
        path: "products",
        element: <ProductRootLayout />,
        children: [
          { index: true, element: <ProductPage /> },
          { path: ":productId", element: <ProductDetail /> },
        ],
      },
    ],
  },
]);
