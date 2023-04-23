import { open_sans } from './fonts'
import './globals.css'

export const metadata = {
  title: 'FlipFlop',
  description: 'An app to showcase CRUD functionality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={open_sans.className}>
      <body>{children}</body>
    </html>
  )
}
