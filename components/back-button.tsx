"use client"
import { cn } from "@/lib/utils"

export default function BackButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Go back"
      onClick={() => {
        if (typeof window !== "undefined") {
          if (window.history.length > 1) window.history.back()
          else window.location.href = "/"
        }
      }}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground/80 shadow-sm transition-colors hover:bg-accent hover:text-foreground",
        className,
      )}
    >
      {/* Ikon panah kiri */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
