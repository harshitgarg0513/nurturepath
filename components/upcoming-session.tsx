import { Calendar, Clock, MessageSquare, Video, MoreHorizontal } from "@/components/ui/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface UpcomingSessionProps {
  startupName: string
  contactName: string
  date: string
  duration: string
  topic: string
  imageUrl: string
  status: "confirmed" | "pending" | "cancelled"
}

export function UpcomingSession({
  startupName,
  contactName,
  date,
  duration,
  topic,
  imageUrl,
  status,
}: UpcomingSessionProps) {
  return (
    <Card>
      <CardHeader className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={imageUrl} alt={startupName} />
              <AvatarFallback>
                {startupName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{startupName}</CardTitle>
              <CardDescription>{contactName}</CardDescription>
            </div>
          </div>
          <Badge variant={status === "confirmed" ? "default" : status === "pending" ? "outline" : "destructive"}>
            {status === "confirmed" ? "Confirmed" : status === "pending" ? "Pending" : "Cancelled"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
            <span>{topic}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <MessageSquare className="h-4 w-4" />
          Message
        </Button>
        <Button size="sm" className="gap-1">
          <Video className="h-4 w-4" />
          Join Call
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Reschedule</DropdownMenuItem>
            <DropdownMenuItem>Cancel Session</DropdownMenuItem>
            <DropdownMenuItem>View Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}

