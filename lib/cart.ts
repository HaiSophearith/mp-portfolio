import type { CartItem } from "./types"

export const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    price: 249.99,
    quantity: 1,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    quantity: 2,
    image: "/placeholder.svg?height=400&width=400",
    variant: "Medium, Blue",
  },
  {
    id: "5",
    name: "Leather Crossbody Bag",
    price: 129.99,
    quantity: 1,
    image: "/placeholder.svg?height=400&width=400",
    variant: "Brown",
  },
]
