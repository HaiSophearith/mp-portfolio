export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  stock: number
  onSale: boolean
  variant?: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  variant?: string
}
