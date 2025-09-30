import Image from "next/image";
import SignUpForm from "@/components/auth/sign-up-form";
import BackButton from "@/components/back-button";

export default function SignUpPage() {
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
        <h1 className="mb-2 text-center text-2xl font-semibold leading-tight text-balance">
          Welcome Onboard!
        </h1>
        <p className="mb-6 text-center text-base text-muted-foreground">
          Let's help you meet up your task
        </p>

        {/* Form */}
        <SignUpForm />
      </section>
    </main>
  );
}
