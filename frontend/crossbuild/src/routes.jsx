import App from "./App"
import PuzzleBuilder from "./components/PuzzleBuilder.jsx"

const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/build',
    element: <PuzzleBuilder />
  }
]

export default routes