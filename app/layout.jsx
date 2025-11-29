import './globals.css'

export const metadata = {
  title: 'Modern SaaS Platform - Transform Your Business',
  description: 'A modern, responsive landing page built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
