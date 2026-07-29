import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'

import {
  Card,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const features = [
    {
      title: "Fast Delivery",
      description: "Get your orders delivered within 24 hours in major cities.",
     
    },
    {
      title: "Secure Payments",
      description: "Pay safely using UPI, Cards, Net Banking, or Wallets.",

    },
    {
      title: "Premium Quality",
      description: "Products sourced from trusted brands worldwide.",

    },
    {
      title: "Easy Returns",
      description: "7-day hassle-free returns on eligible products.",

    },
  ]

  const categories = [
    "Electronics",
    "Fashion",
    "Home",
    "Sports",
    "Books",
    "Beauty",
  ]

  return (
    <div className="space-y-20">

      {/* Hero */}
      <section>
        <Card className="p-10 bg-white/80 shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Your favourite e-commerce store
          </p>

          <CardTitle className="mt-2 text-5xl font-bold">
            StartShop - Your one-stop shop for everything
          </CardTitle>

          <CardDescription className="mt-4 max-w-2xl text-base">
            Discover thousands of products across electronics,
            fashion, home essentials, beauty, and more.
          </CardDescription>

          <div className="mt-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Browse Products
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </Card>
      </section>

      {/* Features */}
      <section>
        <h2 className="mb-8 text-3xl font-bold">
          Why Shop With Us?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="text-4xl">{feature.icon}</div>

              <CardTitle className="mt-4 text-xl">
                {feature.title}
              </CardTitle>

              <CardDescription className="mt-2">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="mb-8 text-3xl font-bold">
          Shop by Category
        </h2>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Card
              key={category}
              className="cursor-pointer p-8 text-center transition hover:shadow-lg"
            >
              <CardTitle>{category}</CardTitle>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="p-8 text-center">
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="mt-2 text-muted-foreground">
              Products
            </p>
          </Card>

          <Card className="p-8 text-center">
            <h3 className="text-4xl font-bold">50K+</h3>
            <p className="mt-2 text-muted-foreground">
              Customers
            </p>
          </Card>

          <Card className="p-8 text-center">
            <h3 className="text-4xl font-bold">99%</h3>
            <p className="mt-2 text-muted-foreground">
              Happy Buyers
            </p>
          </Card>

          <Card className="p-8 text-center">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="mt-2 text-muted-foreground">
              Support
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
     

      {/* Footer */}
      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} StartShop. Built with TanStack Start.
      </footer>
    </div>
  )
}
export default App