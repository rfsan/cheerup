import { Post, RedditJSON } from "@/types"
import { useEffect, useState } from "react"
import { sample } from "lodash"

const URLs = [
  "https://www.reddit.com/r/WhatsWrongWithYourDog/top/.json?limit=30&raw_json=1",
  "https://www.reddit.com/r/corgi/top/.json?limit=30&raw_json=1",
  "https://www.reddit.com/r/Chihuahua/top/.json?limit=30&raw_json=1",
]

export const usePost = () => {
  const [post, setPost] = useState<Post | null>(null)

  const updatePost = () => {
    fetch(sample(URLs)!)
      .then((response) => response.json() as Promise<RedditJSON>)
      .then((data) => {
        const listings = data.data.children.filter(
          (post) => post.data.post_hint === "image"
        )
        setPost(sample(listings)!)
      })
      .catch(console.log)
  }

  useEffect(() => {
    updatePost()
  }, [])

  return { post, updatePost }
}
