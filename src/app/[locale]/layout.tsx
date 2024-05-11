import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useMessages, NextIntlClientProvider } from 'next-intl'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ceres Games | All multiplayer games and play with friends",
  description: "This is Personal NextJS Projects from Syahakato",
};

type RootLayoutTypesParam = {
  children: string
  params: { locale: string }
}

const RootLayout: React.FC<RootLayoutTypesParam> = ({ children, params }) => {
  const messages = useMessages()
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
export default RootLayout