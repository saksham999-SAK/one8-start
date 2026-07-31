import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

// In-memory cart store (server-side)
const cart: Map<string, number> = new Map()

export const mutateCartFn = createServerFn({ method: 'POST' })
  .validator(
    (data: { action: 'add' | 'remove' | 'clear'; productId?: string; quantity?: number }) =>
      data,
  )
  .handler(async ({ data }) => {
    if (data.action === 'add' && data.productId) {
      const current = cart.get(data.productId) ?? 0
      cart.set(data.productId, current + (data.quantity ?? 1))
    } else if (data.action === 'remove' && data.productId) {
      const current = cart.get(data.productId) ?? 0
      const next = current - (data.quantity ?? 1)
      if (next <= 0) {
        cart.delete(data.productId)
      } else {
        cart.set(data.productId, next)
      }
    } else if (data.action === 'clear') {
      cart.clear()
    }
    return { success: true, cartSize: cart.size }
  })

export const Route = createFileRoute('/cart')({
  component: CartPage,
  loader: async () => {
    return { cartSize: cart.size }
  },
})

function CartPage() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">Cart</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Your Cart
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          Your cart is empty. Browse products to add items.
        </p>
      </section>
    </main>
  )
}
