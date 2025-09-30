'use client'

import Image from "next/image"
import TodosForm from "@/components/todo/todos-form"
import BackButton from "@/components/back-button"
import { useRouter } from "next/navigation"
import * as React from "react"

export default function TodosPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [unauthorized, setUnauthorized] = React.useState(false);

  React.useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      setUnauthorized(true);
      setLoading(false);
      setTimeout(() => router.push("/"), 1500);
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;
  if (unauthorized) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-2">Unauthorized</h1>
          <p className="text-muted-foreground">You must be logged in to access this page.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Dekorasi sudut kiri atas */}
      <div
        className="pointer-events-none absolute -top-16 -left-24 h-72 w-72 rounded-full bg-muted/60 blur-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-6 -left-10 h-44 w-44 rounded-full bg-muted/90 blur-0"
        aria-hidden="true"
      />

      {/* Tombol kembali */}
      <BackButton className="absolute left-4 top-4" />

      <section className="mx-auto grid w-full max-w-md place-items-center px-6 pb-20 pt-24 sm:max-w-lg">
        <h1 className="mb-2 text-center text-2xl font-semibold leading-tight text-balance">Welcome Onboard!</h1>

        {/* Ilustrasi */}
        <div className="mb-8">
          <Image
            src="/images/todo.png"
            alt="People with laptop illustration"
            width={220}
            height={180}
            priority
            className="h-auto w-[220px]"
          />
        </div>

        <p className="mb-6 text-center text-base text-[#5e8d89]">Add What your want to do later on..</p>

        {/* Form */}
        <TodosForm />
      </section>
    </main>
  )
}
