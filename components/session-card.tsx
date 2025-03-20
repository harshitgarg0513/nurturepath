import { Calendar, Clock, Users, Play } from "@/components/ui/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SessionCardProps {
  title: string
  speaker: string
  role: string
  date: string
  duration: string
  attendees: number
  imageUrl: string
  tags: string[]
  isLive: boolean
}

export function SessionCard({
  title,
  speaker,
  role,
  date,
  duration,
  attendees,
  imageUrl,
  tags,
  isLive,
}: SessionCardProps) {
  return (
    <Card className="overflow-hidden">
      {isLive && (
        <div className="bg-red-500 text-white px-4 py-1 text-xs font-medium flex items-center justify-center gap-1">
          <Play className="h-3 w-3" />
          LIVE NOW
        </div>
      )}
      <CardHeader className="p-6">
        <div className="space-y-1">
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={imageUrl} alt={speaker} />
              <AvatarFallback>
                {speaker
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <CardDescription>
              {speaker}, {role}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 col-span-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{attendees} attending</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" variant={isLive ? "default" : "outline"}>
          {isLive ? "Join Now" : "Register"}
        </Button>
      </CardFooter>
    </Card>
  )
}

