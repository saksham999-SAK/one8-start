import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h2>Hello "/products/"!</h2>

      <Link to="/products/$id" params={{ id: '1' }}>
        Go to Product 1
      </Link>
      <Link to="/products/$id" params={{ id: '2' }}>
        Go to Product 2
      </Link>
      <Link to="/products/$id" params={{ id: '3' }}>
        Go to Product 3
      </Link>
    </div>
  )
}