import { CustomHead } from "@/components"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon-192x192.png" />
      </Head>
      <CustomHead
        title="CheerUp!"
        description="Cute and funny animals to cheer you up."
        og={{ imageURL: "https://cheerup.vercel.app/images/banner.jpg" }}
      />
      <Component {...pageProps} />
    </>
  )
}
