import { CustomHead } from "@/components"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😄</text></svg>"
        />
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
