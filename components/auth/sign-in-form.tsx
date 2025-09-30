"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignInForm() {
  const [email, setEmail] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Di sini Anda bisa sambungkan ke auth sebenarnya.
      console.log("[v0] SignIn submitted:", { email, confirmPassword })
      await new Promise((r) => setTimeout(r, 600))
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
          <Label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="h-12 rounded-xl bg-card"
            aria-label="Confirm Password"
          />
        </div>

        <div className="text-center">
          <Link href="#" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
            Forgot Password ?
          </Link>
        </div>

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
          <Link href="#" className="font-semibold text-primary underline-offset-4 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  )
}
