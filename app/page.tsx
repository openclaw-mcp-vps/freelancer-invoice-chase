export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Freelancer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Chasing Invoices.<br />
          <span className="text-[#58a6ff]">Get Paid Automatically.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          InvoiceChase sends escalating payment reminder emails with legal templates so you never have to awkwardly follow up again.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to start. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📅</div>
            <h3 className="font-semibold text-white mb-1">Automatic Scheduling</h3>
            <p className="text-sm text-[#8b949e]">Set due dates and let InvoiceChase handle the follow-up cadence for you.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚖️</div>
            <h3 className="font-semibold text-white mb-1">Legal Templates</h3>
            <p className="text-sm text-[#8b949e]">Professionally written escalating emails that protect your rights as a contractor.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📬</div>
            <h3 className="font-semibold text-white mb-1">Reliable Delivery</h3>
            <p className="text-sm text-[#8b949e]">Powered by Resend for high deliverability so your reminders actually land in inboxes.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited invoices tracked',
              'Escalating reminder sequences',
              'Legal email templates included',
              'Custom branding on emails',
              'Resend-powered delivery',
              'Dashboard & audit log',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">How does the reminder sequence work?</h3>
            <p className="text-sm text-[#8b949e]">You add an invoice with a due date. InvoiceChase automatically sends a friendly reminder on the due date, a firmer follow-up 7 days later, and a final legal notice at 30 days — all without you lifting a finger.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">Can I customize the email templates?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Every template is editable from your dashboard. You can adjust tone, add your business name, and include specific payment instructions or bank details.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="font-semibold text-white mb-2">What happens if I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Your account stays active until the end of your billing period. After that, no more reminders are sent. You can export all your invoice data at any time.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} InvoiceChase. Built for freelancers who deserve to get paid.
      </footer>
    </main>
  )
}
