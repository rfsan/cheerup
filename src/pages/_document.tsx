import { Head, Html, Main, NextScript } from "next/document"

export default function MyDocument() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#F8EADF]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
