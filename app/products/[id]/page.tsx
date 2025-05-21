import { ShoppingBag, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import AddToCartButton from "@/components/add-to-cart-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { products } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex items-center justify-between h-16 py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <ShoppingBag className="h-5 w-5" />
            <span>ShopNow</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:underline underline-offset-4">
              Categories
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
                <span className="sr-only">Shopping Cart</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              {product.onSale && <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">Sale</Badge>}
            </div>
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold">{formatPrice(product.price)}</div>
                {product.originalPrice && (
                  <div className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</div>
                )}
                {product.onSale && (
                  <Badge className="bg-red-500 hover:bg-red-600">
                    {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
                  </Badge>
                )}
              </div>
              <Separator />
              <div className="space-y-4">
                <h2 className="font-semibold text-xl">Description</h2>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Category</h3>
                    <p className="text-muted-foreground">{product.category}</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Availability</h3>
                    <p className={product.inStock ? "text-green-600" : "text-red-600"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <AddToCartButton product={product} />
                <Button variant="outline" size="lg">
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 ShopNow. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
