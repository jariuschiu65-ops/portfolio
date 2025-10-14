// pages/index.js
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [expanded, setExpanded] = useState(null);

  // === Featured Skripts ===
  const projects = [
    {
      id: 1,
      title: "Duel System",
      desc: "A full-featured dueling system with queueing, arena teleportation, kit management, and win/lose handling.",
      features: [
        "Player matchmaking & queue",
        "Kit assignment and inventory handling",
        "Arena teleport + safe-return to spawn",
        "Save & restore player inventory on match start/finish",
      ],
      gif: "/duel-system.gif",
    },
    {
      id: 2,
      title: "Save & Restore Inventory",
      desc: "Reliable inventory snapshot/restore system used by duels and other temporary events.",
      features: [
        "Full equipment + hotbar snapshot",
        "Handles edge cases: empty slots, offhand, armor",
        "Namespaces saves per-player with timestamps",
      ],
      gif: "/save-restore.gif",
    },
    {
      id: 3,
      title: "Playtime Rewards",
      desc: "A prestige-based playtime tracking and reward system using SkBee, featuring dynamic scaling rewards and a GUI menu.",
      features: [
        "Tracks player playtime and prestige",
        "Reward GUI with milestones and scaling bonuses",
        "Auto-hourly rewards and key distributions",
        "Prestige system with increasing requirements",
      ],
      gif: "/playtime-rewards.gif",
    },
  ];

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-700 via-purple-600 to-purple-900 text-slate-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-10">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-tight">Chille Skripts</div>
          <div className="space-x-4 text-sm opacity-90">
            <a href="#projects" className="hover:underline">Featured</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-12"
          >
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Minecraft Skript Developer
              <span className="block text-xl font-bold opacity-90 mt-4">
                I build robust Skripts & server systems — made for servers that want stability and fun.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg opacity-95">
              I design, test, and deliver complicated Skript systems — duel setups, GUI tools, inventory managers and more.
              Everything is designed to be easy to integrate and maintain.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="inline-block px-6 py-3 rounded-2xl bg-white/10 backdrop-blur hover:bg-white/20">View Featured</a>
              <a href="#contact" className="inline-block px-6 py-3 rounded-2xl border border-white/20">Contact Me</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="p-6 rounded-2xl bg-white/6 shadow-lg"
          >
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-white/6">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center opacity-90">
                  <div className="text-2xl font-bold">Live Preview</div>
                  <div className="mt-2 text-sm"></div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-sm opacity-85">
            </div>
          </motion.div>
        </section>

        {/* === Featured Projects === */}
        <section id="projects" className="mt-16">
          <h2 className="text-3xl font-bold">Featured Skripts</h2>
          <p className="mt-2 text-sm opacity-90">Only showing working & complex systems — ready to drop into a modern server stack.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl bg-white/5 p-5 shadow-md border border-white/6"
              >
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm opacity-90">{p.desc}</p>
                </div>

                <ul className="mt-4 text-sm space-y-2 opacity-95">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/8 flex items-center justify-center text-xs">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(p.id)}
                    className="text-sm inline-block px-4 py-2 rounded-md bg-white/6 hover:bg-white/10 transition"
                  >
                    {expanded === p.id ? "Hide Preview" : "View Plugin"}
                  </button>
                  <div className="text-xs opacity-80">Updated — tested</div>
                </div>

                <AnimatePresence>
                  {expanded === p.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                        <img
                          src={p.gif}
                          alt={`${p.title} preview`}
                          className="rounded-md mx-auto"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </section>

        {/* === Skills === */}
        <section id="skills" className="mt-16">
          <h2 className="text-3xl font-bold">Skills & Tools</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/4 p-4">
              <h4 className="font-semibold">Scripting</h4>
              <p className="mt-2 text-sm">Skript (Skriptlang), custom GUI creation, event hooking, effect & cooldown systems, inventory serialization.</p>
            </div>
            <div className="rounded-xl bg-white/4 p-4">
              <h4 className="font-semibold">Server & Tools</h4>
              <p className="mt-2 text-sm">Bukkit/Spigot integrations, placeholders, plugin compatibility checks, testing on local and remote servers.</p>
            </div>
            <div className="rounded-xl bg-white/4 p-4">
              <h4 className="font-semibold">Testing & Maintenance</h4>
              <p className="mt-2 text-sm">Edge-case handling, anti-exploit checks, version compatibility notes, and performance-aware code.</p>
            </div>
            <div className="rounded-xl bg-white/4 p-4">
              <h4 className="font-semibold">Soft Skills</h4>
              <p className="mt-2 text-sm">Documentation, responsive support, quick integration notes, modular code patterns.</p>
            </div>
          </div>
        </section>

        {/* === Contact === */}
        <section id="contact" className="mt-16 rounded-2xl p-8 bg-white/6 border border-white/6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-sm opacity-90">
            Want to hire or test a Skript? Ping me on Discord and I’ll share code and setup instructions.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="text-sm opacity-85">Discord</div>
              <div className="font-mono mt-1">caden8978</div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="px-4 py-2 rounded-md bg-white/8">Request Script</a>
              <a href="#" className="px-4 py-2 rounded-md border border-white/10">Download ZIP</a>
            </div>
          </div>
        </section>

        <footer className="mt-16 py-8 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Chille Skripts — Built with Skript & care.
        </footer>
      </main>
    </div>
  );
}
