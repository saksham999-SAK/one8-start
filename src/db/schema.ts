type Product = {
  id: string
  name: string
  description: string
  price: string
  badge: string | null
  rating: string
  reviews: number
  image: string
  inventory: string
}

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  )
}