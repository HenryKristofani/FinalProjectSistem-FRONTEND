'use client';

import Image from "next/image";
import ProfileCard from "@/components/dashboard/profile-card";
import BackButton from "@/components/back-button";
import TodosCard from "@/components/dashboard/todos-card";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function DashboardPage() {
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

  const handleLogout = async () => {
    setLoading(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        }
      });
      if (res.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/");
      } else {
        alert("Logout failed");
      }
    } catch {
      alert("Logout failed");
    } finally {
      setLoading(false);
    }
  };

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
      {/* Dekorasi background hijau polygon */}
      <div className="relative w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-[220px] md:h-[260px] lg:h-[300px]" preserveAspectRatio="none" style={{ display: 'block' }}>
          <polygon fill="#5e8d89" points="0,0 1440,0 1440,260 720,280 0,260" />
          <circle fill="#6fa39e" fillOpacity="0.35" cx="250" cy="60" r="140" />
          <circle fill="#6fa39e" fillOpacity="0.25" cx="400" cy="40" r="100" />
        </svg>
        {/* Tombol kembali */}
        <BackButton className="absolute left-4 top-4 z-10" />
        {/* Profile di dalam dekorasi */}
        <div className="absolute left-1/2 top-[90px] -translate-x-1/2 z-10 w-full flex flex-col items-center">
          <ProfileCard />
        </div>
      </div>

      <section className="mx-auto w-full max-w-md px-6 pb-20 pt-16 sm:max-w-lg flex flex-col items-center">
        {/* Ilustrasi */}
        <div className="mb-4 -mt-8">
          <Image
            src="/images/dashboard.png"
            alt="Person teaching at a whiteboard illustration"
            width={180}
            height={260}
            priority
            className="h-auto w-[180px]"
          />
        </div>
        <h1 className="mb-4 w-full text-left text-xl font-semibold">Todo Tasks.</h1>
        <TodosCard />
        {/* Tombol Logout */}
        <button
          onClick={handleLogout}
          disabled={loading}
          className="mt-6 w-full h-12 rounded-xl bg-[#5e8d89] text-white font-semibold hover:opacity-95 transition"
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </section>
    </main>
  );
}
