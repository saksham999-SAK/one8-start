import type { ProductSelect } from '@/db/schema'
import { cn } from '@/lib/utils'
import { mutateCartFn } from '@/routes/cart'
import { useQueryClient } from '@tanstack/react-query'
import { Link, useRouter } from '@tanstack/react-router'
import { ShoppingBagIcon } from 'lucide-react'

import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

const inventoryTone = {
  'in-stock': 'bg-emerald-50 text-emerald-600 border-emerald-100',
  backorder: 'bg-amber-50 text-amber-700 border-amber-100',
  preorder: 'bg-indigo-50 text-indigo-700 border-indigo-100',
}

export function ProductCard({
  product,
}: {
  product: ProductSelect
}) {
  const router = useRouter()
  const queryClient = useQueryClient()

  return (
    <Link
      to="/products/$id"
      params={{ id: product.id }}
      className="block h-full transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            {product.badge ? (
              <span className="rounded-full bg-slate-900 px-2 py-1 text-xs font-semibold text-white">
                {product.badge}
              </span>
            ) : (
              <span />
            )}

            <span
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-semibold',
                inventoryTone[product.inventory]
              )}
            >
              {product.inventory === 'in-stock'
                ? 'In Stock'
                : product.inventory === 'backorder'
                  ? 'Backorder'
                  : 'Preorder'}
            </span>
          </div>

          <CardTitle>{product.name}</CardTitle>

          <CardDescription>{product.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-slate-600">
            ⭐ {product.rating} ({product.reviews} reviews)
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>

          <Button
            size="sm"
            className="bg-slate-900 text-white hover:bg-slate-800"
            onClick={async (e) => {
              e.preventDefault()
              e.stopPropagation()

              await mutateCartFn({
                data: {
                  action: 'add',
                  productId: product.id,
                  quantity: 1,
                },
              })

              await router.invalidate({ sync: true })

              await queryClient.invalidateQueries({
                queryKey: ['cart-items-data'],
              })
            }}
          >
            <ShoppingBagIcon size={16} className="mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}