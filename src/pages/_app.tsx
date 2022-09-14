import { CustomHead } from "@/components"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomHead />
      <Component {...pageProps} />
    </>
  )
}
