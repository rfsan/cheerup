import { useEffect, useState } from "react"
import Image from "next/image"

interface Post {
  // For the moment is focused on images
  data: {
    subreddit: string
    title: string
    upvote_ratio: number
    ups: number
    post_hint: string
    is_video: boolean
    permalink: string
    preview: {
      images: {
        resolutions: {
          url: string
          width: number
          height: number
        }[]
      }[] // Array with one element
    }
  }
}

interface RedditJSON {
  data: {
    dist: number // Number of children
    children: Post[]
  }
}

export default function HomePage() {
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    fetch(
      "https://www.reddit.com/r/WhatsWrongWithYourDog/top/.json?limit=30&raw_json=1"
    )
      .then((response) => response.json() as Promise<RedditJSON>)
      .then((data) => {
        const listings = data.data.children.filter(
          (post) => post.data.post_hint === "image"
        )
        const randomIndex = Math.floor(Math.random() * listings.length)
        setPost(listings[randomIndex])
      })
      .catch(console.log)
    console.log("useEffect runs")
  }, [])

  return (
    <main className="flex flex-col items-center justify-center space-y-4 p-4">
      {post && (
        <>
          <h1 className="text-2xl font-bold">{post.data.title}</h1>
          <div className="w-full max-w-lg">
            <Image
              alt="A dog doing something weird."
              src={post.data.preview.images[0].resolutions[3].url}
              width={post.data.preview.images[0].resolutions[3].width}
              height={post.data.preview.images[0].resolutions[3].height}
              layout="responsive"
              priority
            />
          </div>
        </>
      )}
    </main>
  )
}
