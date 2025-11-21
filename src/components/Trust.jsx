import { motion } from 'framer-motion'
import { ShieldCheck, KeyRound, CheckCircle2, BadgeCheck } from 'lucide-react'

const trust = [
  {
    icon: ShieldCheck,
    title: 'Non-custodial by design',
    desc: 'Your keys, your crypto. Transactions execute directly on-chain with no middlemen.',
  },
  {
    icon: BadgeCheck,
    title: 'Audited & monitored',
    desc: 'Independent audits, bug bounties, and real-time monitoring for ongoing security.',
  },
  {
    icon: KeyRound,
    title: 'Transparent fees',
    desc: 'Clear, upfront pricing with on-chain visibility for full transparency and control.',
  },
  {
    icon: CheckCircle2,
    title: 'Battle-tested',
    desc: 'Trusted by thousands of users across multiple networks and market conditions.',
  },
]

export default function Trust() {
  return (
    <section id="security" className="relative py-20 md:py-28">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Security you can verify</h2>
            <p className="mt-4 text-slate-300/90">We combine strong smart-contract standards with continuous monitoring and transparent practices to protect your assets.</p>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-emerald-400/20 border border-emerald-300/30" />
              <div className="h-8 w-8 rounded-full bg-indigo-400/20 border border-indigo-300/30" />
              <div className="h-8 w-8 rounded-full bg-cyan-400/20 border border-cyan-300/30" />
            </div>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
            {trust.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="rounded-xl bg-white/10 inline-flex p-3 border border-white/10">
                  <t.icon className="h-6 w-6 text-emerald-300" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{t.title}</h3>
                <p className="mt-1 text-slate-300/90 text-sm">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
