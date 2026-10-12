import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function App() {
  const [dark, setDark] = useState(false)
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col items-center justify-center gap-6 p-6">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="absolute top-4 right-4"
      >
        {dark ? <Sun /> : <Moon />}
      </Button>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>React + Tailwind + shadcn/ui</CardTitle>
          <CardDescription>
            Everything is wired up. Start building here.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Your name</Label>
            <Input
              id="name"
              placeholder="Ada Lovelace"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <p className="text-muted-foreground text-sm">
            {name ? `Hello, ${name}!` : 'Type something above.'}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="secondary" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button onClick={() => setCount((c) => c + 1)}>
            Clicked {count} times
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
