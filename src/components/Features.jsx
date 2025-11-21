import { motion } from 'framer-motion'
import { Shield, Wallet, LineChart, Lock, Cpu, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Audited Smart Contracts',
    desc: 'Independent audits and continuous monitoring keep your funds safe and verifiable.',
  },
  {
    icon: Wallet,
    title: 'Non-Custodial Wallets',
    desc: 'You are always in control. Connect your wallet and transact directly on-chain.',
  },
  {
    icon: LineChart,
    title: 'Optimized Yields',
    desc: 'Route liquidity intelligently across pools to maximize returns with transparent fees.',
  },
  {
    icon: Lock,
    title: 'Risk Management',
    desc: 'Real-time health factors, alerts, and liquidation protections reduce downside risk.',
  },
  {
    icon: Cpu,
    title: 'Multi-Chain Support',
    desc: 'Interact seamlessly across major chains with consistent UX and gas-optimized flows.',
  },
  {
    icon: Zap,
    title: 'Instant Execution',
    desc: 'Low-latency transactions with clear confirmations and friendly error states.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_10%,rgba(56,189,248,0.15),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Everything you need to lend, borrow, and earn</h2>
          <p className="mt-4 text-slate-300/90 max-w-2xl mx-auto">A modern DeFi stack focused on clarity, speed, and safety — without sacrificing control.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.03 * i }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 blur-2xl group-hover:scale-110 transition" />
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3 border border-white/10">
                  <f.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-slate-300/90 text-sm">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
