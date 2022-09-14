import NextHead from "next/head"

export const CustomHead = () => {
  const { og } = {
    og: {
      title: "CheerUp!",
      description: "Cute animals to cheer you up",
      url: "https://cheerup.vercel.app/",
    },
  }

  return (
    <NextHead>
      <title>{og.title}</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😹</text></svg>"
      />
      <meta name="description" content="Web Developer" />
      {/* OG */}
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={og.title} />
      <meta
        key="og:description"
        property="og:description"
        content={og.description}
      />
      <meta key="og:url" property="og:url" content={og.url} />
      {/* OG Image */}
      <meta
        key="og:image"
        property="og:image"
        content="https://cheerup.vercel.app/images/banner.jpg"
      />
      <meta
        key="image"
        property="image"
        content="https://cheerup.vercel.app/images/banner.jpg"
      />
      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="600" />
    </NextHead>
  )
}
