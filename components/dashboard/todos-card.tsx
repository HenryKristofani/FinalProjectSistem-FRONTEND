'use client'

import { FaPlus } from "react-icons/fa"
import * as React from "react"

export default function TodosCard() {
  const [todos, setTodos] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)

  const fetchTodos = React.useCallback(async () => {
    setLoading(true)
    let userId = null
    if (typeof window !== "undefined") {
      const userStr = localStorage.getItem("user")
      if (userStr) {
        try {
          const userObj = JSON.parse(userStr)
          userId = userObj?.id || userObj?._id || null
          if (userId) userId = parseInt(userId)
        } catch {}
      }
    }
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    if (!userId) {
      setTodos([])
      setLoading(false)
      return
    }
    try {
      const res = await fetch(`http://localhost:5000/api/todos`, {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        }
      })
      const data = await res.json()
      // Filter todos milik user login
      setTodos(Array.isArray(data) ? data.filter((t) => parseInt(t.user_id) === userId) : [])
    } catch {
      setTodos([])
    } finally {
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const handleToggle = async (todo: any) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    const newStatus = todo.status === "done" || todo.done ? "pending" : "done"
    try {
      const res = await fetch(`http://localhost:5000/api/todos/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          ...todo,
          status: newStatus
        })
      })
      if (res.ok) {
        await fetchTodos() // refresh todos dari backend
      } else {
        alert("Failed to update todo status")
      }
    } catch {
      alert("Failed to update todo status")
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 mt-4 w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground font-semibold">Dairy Tasks.</span>
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#111] text-white hover:bg-[#5e8d89] transition">
          <FaPlus size={14} />
        </button>
      </div>
      <ul className="max-h-40 overflow-y-auto pr-1">
        {loading ? (
          <li className="text-sm text-muted-foreground">Loading...</li>
        ) : todos.length === 0 ? (
          <li className="text-sm text-muted-foreground">No todos found.</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="flex items-center gap-2 mb-2 last:mb-0">
              <input
                type="checkbox"
                checked={todo.status === "done" || todo.done}
                onChange={() => handleToggle(todo)}
                className="w-5 h-5 rounded border-2 accent-[#5e8d89]"
                style={{ minWidth: 20, minHeight: 20 }}
              />
              <span className={`text-sm ${todo.status === "done" || todo.done ? "font-semibold" : ""}`}>{todo.title || todo.text}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
