import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "MentorMatch connected me with a mentor who helped me navigate my Series A funding round. Their guidance was invaluable.",
      author: "Sarah Johnson",
      role: "Founder, TechStart",
      avatar: "SJ",
    },
    {
      quote:
        "As a mentor, I've been able to give back to the startup community while building meaningful professional relationships.",
      author: "Michael Chen",
      role: "CTO, Enterprise Solutions",
      avatar: "MC",
    },
    {
      quote:
        "The structured approach to mentorship helped us avoid common pitfalls and accelerate our product development timeline.",
      author: "Aisha Patel",
      role: "CEO, HealthTech Innovations",
      avatar: "AP",
    },
    {
      quote:
        "I've mentored on several platforms, but MentorMatch provides the best experience for both mentors and startups.",
      author: "David Rodriguez",
      role: "Angel Investor",
      avatar: "DR",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories from Our Community</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from startups and mentors who have experienced the power of meaningful connections.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

