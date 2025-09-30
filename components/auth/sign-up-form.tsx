"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignUpForm() {
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Di sini Anda bisa sambungkan ke endpoint register sebenarnya.
      console.log("[v0] SignUp submitted:", { fullName, email, password, confirmPassword })
      await new Promise((r) => setTimeout(r, 600))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full" aria-labelledby="signup-title">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="fullName" className="sr-only">
            Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="h-12 rounded-xl bg-card"
            aria-label="Enter your Full Name"
          />
        </div>
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
            placeholder="Create a Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="h-12 rounded-xl bg-card"
            aria-label="Create a Password"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="h-12 rounded-xl bg-card"
            aria-label="Confirm your Password"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          style={{ backgroundColor: '#5e8d89', color: 'white', borderRadius: 0 }}
          className="h-12 hover:opacity-95 mt-2"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
        <p className="text-center text-sm text-muted-foreground mt-2">
          {"Already have an account ? "}
          <Link href="/signin" className="font-semibold text-primary underline-offset-4 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  )
}
