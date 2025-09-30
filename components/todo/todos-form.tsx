"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TodosForm() {
  const [todo1, setTodo1] = React.useState("")
  const [todo2, setTodo2] = React.useState("")
  const [todo3, setTodo3] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Di sini Anda bisa sambungkan ke endpoint todo sebenarnya.
      console.log("[v0] Todos submitted:", { todo1, todo2, todo3 })
      await new Promise((r) => setTimeout(r, 600))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full" aria-labelledby="todos-title">
      <div className="grid gap-4">
        <Input
          type="text"
          placeholder=""
          value={todo1}
          onChange={(e) => setTodo1(e.target.value)}
          required
          className="h-12 rounded-xl bg-card"
          aria-label="Todo 1"
        />
        <Input
          type="text"
          placeholder=""
          value={todo2}
          onChange={(e) => setTodo2(e.target.value)}
          required
          className="h-12 rounded-xl bg-card"
          aria-label="Todo 2"
        />
        <Input
          type="text"
          placeholder=""
          value={todo3}
          onChange={(e) => setTodo3(e.target.value)}
          required
          className="h-12 rounded-xl bg-card"
          aria-label="Todo 3"
        />
        <Button
          type="submit"
          disabled={loading}
          style={{ backgroundColor: '#5e8d89', color: 'white', borderRadius: 0 }}
          className="h-12 hover:opacity-95 mt-2"
        >
          {loading ? "Adding..." : "Add to list"}
        </Button>
      </div>
    </form>
  )
}
