import GlobalHeader from '@/components/organism/GlobalHeader'
import  '../styles/global.scss'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <section>
        <GlobalHeader isLoggedIn={false} />
          {children}
        </section>
      </body>
    </html>
  )
}