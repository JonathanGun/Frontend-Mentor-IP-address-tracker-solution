import "./styles.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="w-screen h-screen flex justify-center">{children}</main>
      </body>
    </html>
  )
}
