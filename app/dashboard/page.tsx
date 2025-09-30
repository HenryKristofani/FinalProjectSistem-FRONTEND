import Image from "next/image";
import ProfileCard from "@/components/dashboard/profile-card";
import BackButton from "@/components/back-button";
// import TodosCard from "@/components/dashboard/todos-card";

export default function DashboardPage() {
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

      <section className="mx-auto grid w-full max-w-md place-items-center px-6 pb-20 pt-40 sm:max-w-lg">
        {/* Ilustrasi */}
        <div className="mb-8">
          <Image
            src="/images/dashboard.png"
            alt="Person teaching at a whiteboard illustration"
            width={180}
            height={260}
            priority
            className="h-auto w-[180px]"
          />
        </div>
      </section>
    </main>
  );
}
