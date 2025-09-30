import Image from "next/image"
import Link from "next/link"

export default function Page() {
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

      <section className="mx-auto grid w-full max-w-md place-items-center px-6 pb-32 pt-36 sm:max-w-lg">
        {/* Ilustrasi */}
        <div className="mb-8">
          <Image
            src="/images/index.png"
            alt="Person with cat illustration"
            width={180}
            height={260}
            priority
            className="h-auto w-[180px]"
          />
        </div>

        <h1 className="mb-2 text-center text-2xl font-semibold leading-tight text-balance">Get things done with TO<span className="inline-block">Do</span></h1>
        <p className="mb-4 text-center text-base text-muted-foreground max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing. Maxime, tempore! Animi nemo aut atque, deleniti nihil dolorem repellendus.
        </p>

        <div className="flex-1" />
        <Link href="/signin" className="w-full mt-8">
          <button
            className="w-full h-12 rounded-none bg-[#5e8d89] text-white font-medium text-base hover:opacity-95 transition"
            style={{ borderRadius: 0 }}
          >
            Get Started
          </button>
        </Link>
      </section>
    </main>
  )
}
