import { Check, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/utils"

export default function OrderConfirmationPage() {
  const orderNumber = "ORD-12345"
  const orderDate = "May 21, 2024"
  const orderTotal = 249.97
  const shippingAddress = {
    name: "John Doe",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "United States",
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex items-center justify-between h-16 py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <ShoppingBag className="h-5 w-5" />
            <span>ShopNow</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-4">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground">Thank you for your purchase. Your order has been confirmed.</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
              <CardDescription>Order #{orderNumber}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-1">
                <div className="font-medium">Order Date</div>
                <div className="text-muted-foreground">{orderDate}</div>
              </div>
              <Separator />
              <div className="grid gap-4">
                <div className="font-medium">Shipping Address</div>
                <div className="text-muted-foreground">
                  <div>{shippingAddress.name}</div>
                  <div>{shippingAddress.address}</div>
                  <div>
                    {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}
                  </div>
                  <div>{shippingAddress.country}</div>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4">
                <div className="font-medium">Payment Information</div>
                <div className="text-muted-foreground">
                  <div>Credit Card ending in 1234</div>
                  <div>Billing address same as shipping address</div>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4">
                <div className="font-medium">Order Summary</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(orderTotal - 10 - orderTotal * 0.1)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{formatPrice(10)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>{formatPrice(orderTotal * 0.1)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatPrice(orderTotal)}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <Link href="/">
                  <Button className="w-full">Continue Shopping</Button>
                </Link>
                <Link href="/orders">
                  <Button variant="outline" className="w-full">
                    View Order History
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
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
