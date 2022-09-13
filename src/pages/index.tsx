import { useEffect, useState } from "react"
import Image from "next/image"
import { usePost } from "@/hooks"

export default function HomePage() {
  const { post, updatePost } = usePost()

  return (
    <main className="mx-auto flex max-w-lg flex-col space-y-4 p-4">
      {post && (
        <>
          <h1 className="text-2xl font-bold">{post.data.title}</h1>
          <div className="w-full">
            <Image
              alt="A dog doing something weird."
              src={post.data.preview.images[0].resolutions[3].url}
              width={post.data.preview.images[0].resolutions[3].width}
              height={post.data.preview.images[0].resolutions[3].height}
              layout="responsive"
              priority
            />
          </div>
          <button onClick={() => updatePost()}>More</button>
        </>
      )}
    </main>
  )
}
