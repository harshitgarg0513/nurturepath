import { Users, Calendar, BookOpen, BarChart, MessageSquare, Award, Clock, DollarSign } from "lucide-react"

export function FeatureSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides a comprehensive suite of tools and resources to help startups and mentors connect,
              collaborate, and grow together.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Users className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Mentor Matching</h3>
            <p className="text-center text-sm text-muted-foreground">
              Connect with industry-specific mentors who understand your unique challenges.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Calendar className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Live Sessions</h3>
            <p className="text-center text-sm text-muted-foreground">
              Participate in webinars and live Q&A sessions with industry experts.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BookOpen className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Knowledge Hub</h3>
            <p className="text-center text-sm text-muted-foreground">
              Access industry-specific resources, guides, and best practices.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BarChart className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Growth Tracking</h3>
            <p className="text-center text-sm text-muted-foreground">
              Monitor your progress and measure the impact of mentorship on your business.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <MessageSquare className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Community Forum</h3>
            <p className="text-center text-sm text-muted-foreground">
              Engage with fellow entrepreneurs and share experiences in a supportive environment.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Award className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Verified Experts</h3>
            <p className="text-center text-sm text-muted-foreground">
              All mentors are vetted professionals with proven track records in their fields.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Clock className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Flexible Scheduling</h3>
            <p className="text-center text-sm text-muted-foreground">
              Book sessions at times that work for you, with easy calendar integration.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <DollarSign className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Transparent Pricing</h3>
            <p className="text-center text-sm text-muted-foreground">
              Clear, upfront pricing for all mentorship sessions with no hidden fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

