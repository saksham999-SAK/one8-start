import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
   <div>
    <button>click</button>
   </div>
  )
}
