import React from "react";
import { BotMessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans relative">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(249, 115, 22, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Navigation / Branding */}
      <header className="relative z-10 w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-Inter font-bold tracking-wide text-white">
          Spot by Tripo Saints
        </h1>
        <span className="text-sm md:text-base text-gray-400">
          Built by <Link to={"https://github.com/adityaguptareal"} className="underline">Aditya</Link>
        </span>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-20 md:py-32">
        <BotMessageSquare size={120} className="mb-6 text-white" />
        <h2 className="text-3xl md:text-6xl font-extrabold max-w-[900px] mb-4">
          A Smarter Way to See Your Team's Seats
        </h2>
        <p className="max-w-xl text-gray-300 text-base md:text-lg mb-6">
          Search, track, and view team availability — all from one simple
          interactive dashboard. Say goodbye to spreadsheets forever.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg shadow-md hover:bg-orange-100 transition font-Inter cursor-pointer duration-200"
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-16 bg-[#0e0e0e]">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          What Spot Can Do:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-white">
          {[
            "🪑 See who's sitting where — instantly",
            "👀 Hover to view name, role, and project",
            "🔍 Search anyone and find their seat",
            "🟢 Check if someone is available, busy, or on break",
            "🚀 Clean, responsive and interactive UI",
            "📂 Filter by department or role",
            "🖥️ Designed for Admins, HR and Team Leads",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] cursor-pointer hover:bg-gray-900 p-5 rounded-lg border border-gray-800 shadow-sm hover:shadow-md transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-gray-500 text-sm">
        Made with ❤️ by Aditya • Internship Project @ Tripo Saints
      </footer>
    </div>
  );
}

export default Home;
