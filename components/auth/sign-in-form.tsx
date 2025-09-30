"use client"


import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignInForm() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }
      // Simpan token dan data user ke localStorage
      if (data.token) {
        localStorage.setItem("token", data.token)
      }
      // Simpan data user (id dan email) ke localStorage
      if (data.id && data.email) {
        localStorage.setItem("user", JSON.stringify({ id: data.id, email: data.email }))
      }
      // Login sukses, redirect ke /todos
      router.push("/todos")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full" aria-labelledby="signin-title">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email" className="sr-only">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 rounded-xl bg-card"
            aria-label="Enter your Email address"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-12 rounded-xl bg-card"
            aria-label="Enter your Password"
          />
        </div>

        <div className="text-center">
          <Link href="#" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
            Forgot Password ?
          </Link>
        </div>

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        <Button
          type="submit"
          disabled={loading}
          style={{ backgroundColor: '#5e8d89', color: 'white', borderRadius: 0 }}
          className="h-12 hover:opacity-95"
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          {"Dont have an account ? "}
          <Link href="/signup" className="font-semibold text-primary underline-offset-4 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  )
}

