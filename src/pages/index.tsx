import Image from "next/image"
import { usePost } from "@/hooks"
import { Post } from "@/types"

export default function HomePage() {
  const { post, updatePost, loading } = usePost()

  return (
    <main className="mx-auto max-w-lg">
      {post && (
        <>
          {!loading && (
            <PostCard className="min-h-screen px-4 pb-36 pt-4" post={post} />
          )}
          <div className="fixed bottom-0 mx-auto w-full max-w-lg px-4 pt-4">
            <div className="mx-auto flex w-full justify-evenly rounded-full bg-blue-400 py-6">
              <button className="text-5xl" onClick={() => updatePost("dogs")}>
                🐶
              </button>
              <button className="text-5xl" onClick={() => updatePost("cats")}>
                🐱
              </button>
            </div>
            <span className="block py-1 text-center text-sm text-neutral-400">
              Made by{" "}
              <a
                className="underline"
                href="https://github.com/rfsan"
                target="_blank"
                rel="noreferrer"
              >
                rfsan
              </a>
            </span>
          </div>
        </>
      )}
    </main>
  )
}

interface PostCardTypes {
  className: string
  post: Post
}

const PostCard = ({ className, post }: PostCardTypes) => {
  const {
    title,
    preview: { images },
  } = post.data
  const image = images[0].resolutions[3] ?? images[0].resolutions.at(-1)

  return (
    <div className={className}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="mt-4 w-full">
        <Image
          alt="Cute and funny animal."
          src={image.url}
          width={image.width}
          height={image.height}
          layout="responsive"
          priority
          unoptimized
        />
      </div>
    </div>
  )
}
