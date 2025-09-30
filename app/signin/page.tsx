import Image from "next/image";
import SignInForm from "@/components/auth/sign-in-form";
import BackButton from "@/components/back-button";

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

      {/* Tombol kembali */}
      <BackButton className="absolute left-4 top-4" />

      <section className="mx-auto grid w-full max-w-md place-items-center px-6 pb-20 pt-24 sm:max-w-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold leading-tight text-balance">
          Welcome Back!
        </h1>

        {/* Ilustrasi */}
        <div className="mb-8">
          <Image
            src="/images/sign-in.png"
            alt="Person teaching at a whiteboard illustration"
            width={180}
            height={260}
            priority
            className="h-auto w-[180px]"
          />
        </div>

        {/* Form */}
        <SignInForm />
      </section>
    </main>
  );
}
