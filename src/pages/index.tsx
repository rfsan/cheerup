import Image from "next/image"
import { usePost } from "@/hooks"
import { Post } from "@/types"

export default function HomePage() {
  const { post, updatePost, loading } = usePost()

  return (
    <main className="mx-auto flex max-w-lg flex-col space-y-4 p-4">
      {post && (
        <>
          {!loading && <PostCard post={post} />}
          <div className="flex justify-center space-x-8 py-8">
            <button className="text-7xl" onClick={() => updatePost("dogs")}>
              🐶
            </button>
            <button className="text-7xl" onClick={() => updatePost("cats")}>
              🐱
            </button>
          </div>
        </>
      )}
    </main>
  )
}

interface PostCardTypes {
  post: Post
}

const PostCard = ({ post }: PostCardTypes) => {
  const {
    title,
    preview: { images },
  } = post.data
  console.log(images[0].resolutions)
  const image = images[0].resolutions[3] ?? images[0].resolutions.at(-1)

  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="w-full">
        <Image
          alt="A dog doing something weird."
          src={image.url}
          width={image.width}
          height={image.height}
          layout="responsive"
          priority
        />
      </div>
    </>
  )
}
