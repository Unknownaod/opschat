"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Background graphics */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-indigo-800 rounded-full -top-40 -left-40 opacity-40 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full -bottom-32 -right-32 opacity-30 animate-pulse"></div>
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 animate-fadeIn">
          Telegram Clone
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl animate-fadeIn delay-200">
          Chat securely and instantly with your friends. Anywhere. Anytime.
        </p>

        <div className="flex space-x-6 animate-fadeIn delay-400">
          <button
            onClick={() => router.push("/login")}
            className="bg-blue-600 hover:bg-blue-500 transition px-8 py-3 rounded-xl text-lg font-semibold shadow-lg"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/register")}
            className="bg-gray-700 hover:bg-gray-600 transition px-8 py-3 rounded-xl text-lg font-semibold shadow-lg"
          >
            Register
          </button>
        </div>

        {/* Features / Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 max-w-5xl text-left">
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Secure</h3>
            <p className="text-gray-400">All your chats are end-to-end encrypted for privacy.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Fast</h3>
            <p className="text-gray-400">Send messages instantly across all devices.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Cross-Platform</h3>
            <p className="text-gray-400">Use it on web, desktop, and mobile seamlessly.</p>
          </div>
        </div>
      </main>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-pulse {
          animation: pulse 6s ease-in-out infinite alternate;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
}
