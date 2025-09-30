"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useRouter } from "next/navigation"

export default function TodosForm() {
  const [todo1, setTodo1] = React.useState("")
  const [todo2, setTodo2] = React.useState("")
  const [todo3, setTodo3] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Ambil token dari localStorage (atau cookies jika pakai SSR)
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
      // Ambil user_id dari localStorage (atau context/session)
      // Ambil user dari localStorage (key: 'user' berisi JSON string)
      let userId: number | null = null
      if (typeof window !== "undefined") {
        const userStr = localStorage.getItem("user")
        console.log("[DEBUG] localStorage user:", userStr)
        if (userStr) {
          try {
            const userObj = JSON.parse(userStr)
            userId = userObj?.id || userObj?._id || null
            console.log("[DEBUG] parsed userId:", userId, userObj)
          } catch (err) {
            console.log("[DEBUG] JSON parse error:", err)
            userId = null
          }
        }
      }
      // Ganti category_id sesuai kebutuhan, misal default 1
      const categoryId = 1
      if (!userId) throw new Error("User not found. Please login again.")

      // Buat array todo
      const todos = [todo1, todo2, todo3].filter(Boolean)
      // Kirim satu per satu ke backend
      for (const title of todos) {
        const res = await fetch("http://localhost:5000/api/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {})
          },
          body: JSON.stringify({
            title,
            description: "",
            status: "pending",
            user_id: userId,
            category_id: categoryId
          })
        })
        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.message || "Failed to add todo")
        }
      }
      // Sukses, redirect ke dashboard
      router.push("/dashboard")
    } catch (err: any) {
      alert(err.message || "Failed to add todo")
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
