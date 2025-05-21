"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false)
      // Here you would typically dispatch to a cart context or store
      console.log(`Added ${quantity} of ${product.name} to cart`)
    }, 600)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
        >
          -
        </Button>
        <span className="w-12 text-center">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(quantity + 1)}
          disabled={quantity >= product.stock}
        >
          +
        </Button>
      </div>
      <Button size="lg" className="w-full" onClick={handleAddToCart} disabled={isAdding || !product.inStock}>
        {isAdding ? (
          "Adding..."
        ) : (
          <>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </>
        )}
      </Button>
    </div>
  )
}
