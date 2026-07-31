import type { ProductSelect } from '@/db/schema'

// In-memory product store (no database required)
const products: ProductSelect[] = [
  {
    id: '1',
    name: 'TanStack Router Pro',
    description:
      'Type-safe routing for React applications with nested routes, loaders, and automatic code splitting.',
    price: '99.99',
    badge: 'New',
    rating: '4.8',
    reviews: 127,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'TanStack Query Enterprise',
    description:
      'Powerful data synchronization for React. Fetch, cache, and manage server state with zero configuration.',
    price: '149.99',
    badge: 'New',
    rating: '4.9',
    reviews: 234,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
    createdAt: new Date(),
  },
  {
    id: '3',
    name: 'TanStack Table Premium',
    description:
      'Headless UI for building powerful tables and datagrids. Highly customizable and framework agnostic.',
    price: '79.99',
    badge: 'New',
    rating: '4.7',
    reviews: 89,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
    createdAt: new Date(),
  },
  {
    id: '4',
    name: 'TanStack Form Pro',
    description:
      'Build complex forms with validation, nested fields, async submissions, and excellent TypeScript support.',
    price: '69.99',
    badge: null,
    rating: '4.8',
    reviews: 162,
    image: '/tanstack-circle-logo.png',
    inventory: 'in-stock',
    createdAt: new Date(),
  },
  {
    id: '5',
    name: 'TanStack Virtual',
    description:
      'Efficient virtualization for rendering thousands of rows and lists with excellent performance.',
    price: '59.99',
    badge: null,
    rating: '4.9',
    reviews: 201,
    image: '/tanstack-circle-logo.png',
    inventory: 'preorder',
    createdAt: new Date(),
  },
]

export async function getAllProducts(): Promise<ProductSelect[]> {
  return products
}

export async function getProductById(
  id: string,
): Promise<ProductSelect | undefined> {
  return products.find((p) => p.id === id)
}
