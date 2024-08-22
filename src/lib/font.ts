import { Inter, Poppins } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({ subsets: ["latin"] })

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const clashDisplay = localFont({
  src: "../styles/fonts/clash-display.ttf",
  display: "swap",
  style: "normal",
  weight: "500",
  variable: "--font-clash-display",
})
