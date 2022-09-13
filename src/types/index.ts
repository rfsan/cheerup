export interface Post {
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

export interface RedditJSON {
  data: {
    dist: number // Number of children
    children: Post[]
  }
}
