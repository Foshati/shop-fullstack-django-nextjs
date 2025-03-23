"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"
import { ShareButtons } from "./share-buttons"
import { CommentList } from "./comment-list"


export function BlogPost() {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(42)
  const [comment, setComment] = useState("")
  const [showComments, setShowComments] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save the comment to a database
    setComment("")
  }

  return (
    <div className="mx-auto">
      <Card className="border-none shadow-none">
        <CardHeader className=" ">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">Jane Doe</h4>
              <p className="text-sm text-muted-foreground">Published on May 15, 2023</p>
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The Future of Web Development: Trends to Watch in 2023
          </h1>
        </CardHeader>
        <CardContent className=" space-y-6">
          <Image
            src="/placeholder.svg?height=500&width=1000"
            alt="Blog cover image"
            width={1000}
            height={500}
            className="rounded-lg object-cover w-full aspect-[2/1]"
          />

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p>
              The web development landscape is constantly evolving, with new technologies and methodologies emerging at
              a rapid pace. As we move further into 2023, several key trends are shaping the future of how we build and
              interact with web applications.
            </p>

            <h2>The Rise of AI-Powered Development</h2>
            <p>
              Artificial intelligence is revolutionizing how developers work. From code completion tools to automated
              testing and debugging, AI assistants are becoming an integral part of the development workflow. These
              tools not only boost productivity but also help developers focus on more creative and complex aspects of
              their projects.
            </p>

            <h2>Server Components and Hybrid Rendering</h2>
            <p>
              The line between client and server rendering continues to blur. Frameworks like Next.js are pioneering
              approaches that combine the best of both worlds, allowing developers to choose the optimal rendering
              strategy for each component. This results in applications that are both interactive and performant.
            </p>

            <h2>Web3 and Decentralized Applications</h2>
            <p>
              While the initial hype has settled, Web3 technologies continue to mature. Decentralized applications built
              on blockchain technology are finding practical use cases beyond cryptocurrency, particularly in areas
              requiring transparency and trust.
            </p>

            <h2>Conclusion</h2>
            <p>
              As these trends continue to evolve, developers who stay adaptable and embrace continuous learning will be
              best positioned to create innovative, user-friendly web experiences. The future of web development looks
              bright, with technologies that empower both developers and users.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-6  pt-6">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${liked ? "text-red-500" : ""}`}
                onClick={handleLike}
              >
                <Heart className={`h-6 w-6 ${liked ? "fill-current" : ""}`} />
                <span className="sr-only">Like</span>
              </Button>
              <span className="text-sm font-medium">{likeCount} likes</span>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setShowComments(!showComments)}
              >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">Comments</span>
              </Button>
              <span className="text-sm font-medium">24 comments</span>

              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${bookmarked ? "text-primary" : ""}`}
                onClick={handleBookmark}
              >
                <Bookmark className={`h-6 w-6 ${bookmarked ? "fill-current" : ""}`} />
                <span className="sr-only">Bookmark</span>
              </Button>
              <span className="text-sm font-medium">{bookmarked ? "Saved" : "Save"}</span>
            </div>

            <ShareButtons />
          </div>

          <Separator />

          {showComments && (
            <div className="w-full space-y-6">
              <h3 className="text-xl font-semibold">Comments</h3>

              <CommentList />

              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <h4 className="text-lg font-medium">Leave a comment</h4>
                <Textarea
                  placeholder="Share your thoughts..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button type="submit" className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Post Comment
                </Button>
              </form>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

