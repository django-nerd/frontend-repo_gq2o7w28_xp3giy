export default function CTA() {
  return (
    <section id="get-started" className="relative py-16 md:py-24">
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 p-8 sm:p-12">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_0%_100%,rgba(99,102,241,0.2),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to get started?</h3>
            <p className="mt-2 text-slate-200/90 max-w-2xl">Connect your wallet and experience a faster, safer way to borrow and earn. No accounts, no custodial risk — just your assets, your rules.</p>
            <div className="mt-6">
              <a href="#" className="group relative inline-flex h-12 items-center justify-center rounded-xl px-6 font-semibold text-white">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 transition-opacity group-hover:opacity-90" />
                <span className="relative">Connect Wallet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
