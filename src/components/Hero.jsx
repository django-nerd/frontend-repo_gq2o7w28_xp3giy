import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(1200px_800px_at_120%_30%,rgba(20,184,166,0.2),transparent)]" />

      {/* 3D Spline Scene */}
      <div className="absolute inset-0 opacity-90">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glass overlay to improve contrast */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-24 md:pt-36 md:pb-40">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 shadow-lg shadow-indigo-500/5"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Non-custodial • Audited • Multi-chain
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Smart Lending and Yield, Reimagined
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-5 max-w-xl text-base sm:text-lg text-slate-200/90"
            >
              Borrow, lend, and earn safely with transparent fees and full control of your assets. Designed for both DeFi natives and newcomers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#get-started"
                className="group relative inline-flex h-12 items-center justify-center rounded-xl px-6 font-semibold text-white shadow-[0_10px_40px_-12px_rgba(79,70,229,0.6)]"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 transition-opacity group-hover:opacity-90" />
                <span className="relative">Connect Wallet</span>
              </a>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-xl px-6 font-semibold text-slate-100/90 border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-10 grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                { label: 'Total Value Secured', value: '$1.2B+' },
                { label: 'Supported Chains', value: '8' },
                { label: 'Active Users', value: '250k+' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="text-xl font-bold text-white">{item.value}</div>
                  <div className="text-xs text-slate-200/70">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="md:col-span-6 pointer-events-none">
            {/* Empty column to give space for 3D scene and preserve layout balance */}
            <div className="aspect-[4/3]" />
          </div>
        </div>
      </div>
    </section>
  )
}
