import { ThumbsUp, MessageSquare, Bookmark, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FeedItemProps {
  title: string
  author: string
  role: string
  date: string
  content: string
  imageUrl: string
  tags: string[]
  likes: number
  comments: number
}

export function FeedItem({ title, author, role, date, content, imageUrl, tags, likes, comments }: FeedItemProps) {
  return (
    <Card>
      <CardHeader className="p-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={imageUrl} alt={author} />
            <AvatarFallback>
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2">
              <CardDescription className="text-sm font-medium text-foreground">{author}</CardDescription>
              <CardDescription className="hidden xs:block text-sm text-muted-foreground">•</CardDescription>
              <CardDescription className="text-sm text-muted-foreground">{role}</CardDescription>
            </div>
            <CardDescription className="text-xs text-muted-foreground">{date}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <p className="text-sm">{content}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2">
            <ThumbsUp className="h-4 w-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2">
            <MessageSquare className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

