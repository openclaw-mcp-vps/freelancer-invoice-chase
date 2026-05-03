import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceChase — Automated Payment Reminders for Freelancers',
  description: 'Stop chasing clients manually. Send escalating payment reminder emails with legal templates for overdue invoices. Built for independent contractors and freelance developers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4dccea36-a35b-46af-ab8b-4a3e95a8d132"></script>
      </head>
      <body style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
