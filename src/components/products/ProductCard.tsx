import type { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { Icons } from "../icons";
import { formatPrice } from "@/lib/utils";

interface ProductProps {
  product: Product;
}

function ProductCard({ product }: ProductProps) {
  return (
    <Card className="size-full overflow-hidden rounded-lg py-0">
      <Link to={`/products/${product.id}`} aria-label={product.name}>
        <div className="border-b p-0 py-0">
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <img
              src={product.images[0]}
              alt="product image"
              className="size-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
        </div>
        <div className="space-y-1.5 pt-4 pl-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}
            {product.discount > 0 && (
              <span className="ml-2 font-extralight line-through">
                {formatPrice(product.discount)}
              </span>
            )}
          </CardDescription>
        </div>
      </Link>
      <CardFooter className="p-4 pt-0">
        {product.status === "sold" ? (
          <Button
            className="h-8 w-full rounded-sm font-bold"
            size="sm"
            disabled={true}
            aria-label="sold out"
          >
            Sold Out
          </Button>
        ) : (
          <Button
            size={"sm"}
            className="bg-brand h-8 w-full rounded-sm font-bold"
            aria-label="add to cart"
          >
            <Icons.plus />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
