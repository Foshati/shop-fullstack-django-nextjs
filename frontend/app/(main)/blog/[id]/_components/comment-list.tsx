import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, Reply } from "lucide-react"

type Comment = {
  id: number
  author: {
    name: string
    avatar: string
    initials: string
  }
  date: string
  content: string
  likes: number
  liked: boolean
}

const comments: Comment[] = [
  {
    id: 1,
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
    },
    date: "May 16, 2023",
    content:
      "This is a fantastic overview of current trends! I've been particularly interested in the AI-powered development tools. Have you tried GitHub Copilot or similar tools?",
    likes: 12,
    liked: false,
  },
  {
    id: 2,
    author: {
      name: "Sam Rivera",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SR",
    },
    date: "May 16, 2023",
    content:
      "I'm skeptical about Web3's practical applications outside of finance. Would love to hear more specific examples of successful decentralized apps in other domains.",
    likes: 5,
    liked: true,
  },
  {
    id: 3,
    author: {
      name: "Taylor Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "TK",
    },
    date: "May 17, 2023",
    content:
      "Server Components have been a game-changer for our team. The performance benefits are real, and it's made our codebase much more maintainable.",
    likes: 8,
    liked: false,
  },
]

export function CommentList() {
  return (
    <div className="">
      {comments.map((comment) => (
        <div key={comment.id} className="space-y-2">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
              <AvatarFallback>{comment.author.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium">{comment.author.name}</h5>
                  <p className="text-xs text-muted-foreground">{comment.date}</p>
                </div>
              </div>
              <p className="text-sm">{comment.content}</p>
              <div className="flex items-center gap-4 pt-1">
                <Button variant="ghost" size="sm" className="h-auto p-0">
                  <Heart className={`mr-1 h-4 w-4 ${comment.liked ? "fill-current text-red-500" : ""}`} />
                  <span className="text-xs">{comment.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-auto p-0">
                  <Reply className="mr-1 h-4 w-4" />
                  <span className="text-xs">Reply</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

