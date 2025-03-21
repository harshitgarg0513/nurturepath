import { Star, Calendar } from "@/components/ui/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MentorCardProps {
  name: string
  role: string
  industry: string
  rating: number
  reviews: number
  hourlyRate: number
  imageUrl: string
  availability: string
  specialties: string[]
}

export function MentorCard({
  name,
  role,
  industry,
  rating,
  reviews,
  hourlyRate,
  imageUrl,
  availability,
  specialties,
}: MentorCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle>{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 text-primary" />
              <span className="font-medium">{rating}</span>
              <span className="text-muted-foreground">({reviews} reviews)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0 space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">{industry}</Badge>
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary">
              {specialty}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{availability}</span>
          </div>
          <div className="font-medium">INR {hourlyRate}/hour</div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          View Profile
        </Button>
        <Button size="sm">Book Session</Button>
      </CardFooter>
    </Card>
  )
}

