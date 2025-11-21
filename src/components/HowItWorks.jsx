import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Connect your wallet',
    desc: 'Securely connect with your preferred wallet provider to get started.',
  },
  {
    step: '02',
    title: 'Deposit or borrow',
    desc: 'Supply assets to earn yield, or borrow with transparent collateral requirements.',
  },
  {
    step: '03',
    title: 'Track and optimize',
    desc: 'Monitor health, adjust positions, and automate strategies for better returns.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute top-0 left-0 h-1 w-1/3 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400" />
              <div className="text-sm font-mono text-slate-200/70">{s.step}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
