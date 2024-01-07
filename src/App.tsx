import { Button } from "./components/ui/button"

function App() {
  return (
    <>
      <Button variant="default" className="w-full bg-indigo-700">1</Button>
      <Button variant="destructive" className="w-1/2">2</Button>
      <Button variant="ghost" className="w-1/3">3</Button>
      <Button variant="link" className="w-1/4">4</Button>
      <Button variant="outline" className="w-1/5">4</Button>
      <Button variant="secondary" className="w-1/6">4</Button>
    </>
  )
}

export default App