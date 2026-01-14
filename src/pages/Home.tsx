import { Link, useLoaderData } from "react-router";
import CarouselCard from "@/components/products/CarouselCard";
import { Button } from "@/components/ui/button";
import Couch from "@/data/images/couch.png";
import BlogCard from "@/components/blogs/BlogCard";
import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/types";

const Home = () => {
  const { productsData, postsData } = useLoaderData();

  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string;
    href: string;
    sideText: string;
  }) => (
    <div className="mt-28 flex flex-col px-4 md:flex-row md:justify-between md:px-0">
      <h2 className="md:0 mb-4 text-2xl font-bold">{title}</h2>
      <Link to={href} className="text-muted-foreground font-semibold underline">
        {sideText}
      </Link>
    </div>
  );
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Text Sections */}
        <div className="my-8 text-center lg:mt-22 lg:mb-0 lg:w-2/5 lg:text-left">
          <h1 className="text-brand mb-4 text-4xl font-extrabold lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8">
            Furniture is an essential components of any living space, providing
            functionality, comfort, and aesthetic appeal.
          </p>
          {/* Image Section */}
          <div>
            <Button
              asChild
              className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold"
            >
              <Link to="#">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-bold"
            >
              <Link to="#" className="text-brand">
                Explore
              </Link>
            </Button>
          </div>
        </div>
        <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
      </div>
      <CarouselCard products={productsData.products} />
      <Title
        title="Featured Products"
        href="/products"
        sideText="View All Products"
      />
      <div className="grid grid-cols-1 gap-6 px-4 pt-4 md:grid-cols-2 md:px-0 lg:grid-cols-4">
        {productsData.products.slice(0, 4).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Title title="Recent Blog" href="/blogs" sideText="View All Posts" />
      <BlogCard posts={postsData.posts} />
    </div>
  );
};

export default Home;
