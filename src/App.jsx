import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold">ExtraFi</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#security" className="hover:text-white">Security</a>
          </nav>
          <a href="#get-started" className="group relative inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 transition-opacity group-hover:opacity-90" />
            <span className="relative">Connect Wallet</span>
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Trust />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <p className="mt-4 text-slate-400/90">Non-custodial DeFi made simple and secure.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-slate-300/90">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How it works</a></li>
              <li><a href="#security" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-slate-300/90">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="mt-3 space-y-2 text-slate-300/90">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Disclosures</a></li>
            </ul>
          </div>
        </div>
        <div className="px-6 sm:px-8 pb-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} ExtraFi. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
