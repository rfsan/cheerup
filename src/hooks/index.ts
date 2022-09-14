import { Post, RedditJSON } from "@/types"
import { useEffect, useState } from "react"
import { sample } from "lodash"

// https://stackoverflow.com/a/59857409/5662304
const categories = ["dogs", "cats"] as const
type Category = typeof categories[number]

const URLs: Record<Category, string[]> = {
  dogs: [
    "https://www.reddit.com/r/WhatsWrongWithYourDog/top/.json?limit=30&raw_json=1",
    "https://www.reddit.com/r/corgi/top/.json?limit=30&raw_json=1",
    "https://www.reddit.com/r/Chihuahua/top/.json?limit=30&raw_json=1",
  ],
  cats: ["https://www.reddit.com/r/catpictures/top/.json?limit=30&raw_json=1"],
}

export const usePost = () => {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(false)

  const updatePost = (category?: Category) => {
    setLoading(true)
    category = category ?? sample(categories)!
    const selectedURL = sample(URLs[category])!

    fetch(selectedURL)
      .then((response) => response.json() as Promise<RedditJSON>)
      .then((data) => {
        const listings = data.data.children.filter(
          (post) => post.data.post_hint === "image"
        )
        setPost(sample(listings)!)
        setLoading(false)
      })
      .catch(console.log)
  }

  useEffect(() => {
    updatePost()
  }, [])

  return { post, updatePost, loading }
}
