import "@/styles/globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import TopProgressBar from "@/components/providers/top-progressbar-provider"
import { Toaster } from "@/components/ui/toaster"
import { poppins } from "@/lib/font"
import { Metadata } from "@/types/metadata"

export const metadata: Metadata = {
  title: {
    template: "%s | Weserve App",
    default: "Weserve App",
  },
  description: "Official Weserve App by Arief Rachman Hakim",
  metadataBase: new URL("https://arief-dev.vercel.app"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
        suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <TopProgressBar>{children}</TopProgressBar>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
