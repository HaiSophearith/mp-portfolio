import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/types"
import { formatPrice } from "@/lib/utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`} className="group">
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {product.onSale && <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">Sale</Badge>}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg truncate">{product.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{product.category}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-bold">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                {product.rating} ★ ({product.reviews})
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  )
}
