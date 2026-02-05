"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-black" />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur">
          🚀 Modern real-time messaging
        </div>

        {/* Hero */}
        <h1 className="animate-fadeIn bg-gradient-to-br from-white to-gray-300 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-7xl">
          ChatSphere
        </h1>

        <p className="animate-fadeIn delay-200 mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
          A secure, lightning-fast messaging platform built for modern teams and
          real-time conversations.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fadeIn delay-400 mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => router.push("/register")}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-10 py-4 text-lg font-semibold shadow-lg transition-all hover:scale-[1.03] hover:shadow-indigo-500/30"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            Get Started
          </button>

          <button
            onClick={() => router.push("/login")}
            className="rounded-xl border border-white/15 bg-white/5 px-10 py-4 text-lg font-semibold text-gray-200 backdrop-blur transition hover:bg-white/10 hover:border-white/25"
          >
            Sign In
          </button>
        </div>

        {/* Features */}
        <div className="mt-24 grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Secure by Design",
              desc: "End-to-end encrypted messaging with privacy first.",
              icon: "🔐",
            },
            {
              title: "Real-Time Speed",
              desc: "Instant delivery powered by modern web sockets.",
              icon: "⚡",
            },
            {
              title: "Everywhere",
              desc: "Web-first, responsive, and cross-platform ready.",
              icon: "🌍",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:scale-[1.03] hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
