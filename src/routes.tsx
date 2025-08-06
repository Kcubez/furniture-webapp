import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
// import BlogPage from "./pages/blogs/Blog";
// import BlogDetail from "./pages/blogs/BlogDetail";
// import BlogRootLayout from "./pages/blogs/BlogRootLayout";

const BlogRootLayout = lazy(() => import("./pages/blogs/BlogRootLayout"));
const BlogPage = lazy(() => import("./pages/blogs/Blog"));
const BlogDetail = lazy(() => import("./pages/blogs/BlogDetail"));

import ProductRootLayout from "./pages/products/ProductRootLayout";
import ProductPage from "./pages/products/Product";
import ProductDetail from "./pages/products/ProductDetail";

const SuspenseFallBack = () => <div className="text-center">Loading...</div>;

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
        element: (
          <Suspense fallback={<SuspenseFallBack />}>
            <BlogRootLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SuspenseFallBack />}>
                <BlogPage />
              </Suspense>
            ),
          },
          {
            path: ":blogId",
            element: (
              <Suspense fallback={<SuspenseFallBack />}>
                <BlogDetail />
              </Suspense>
            ),
          },
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
