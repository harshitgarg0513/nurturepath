import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connect, Learn, and Grow with Industry Experts
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Nurture Path bridges the gap between ambitious startups and experienced industry professionals, providing
                structured guidance for your entrepreneurial journey.
              </p>
            </div>
            <div className="space-y-2">
              <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                "The most valuable resource for any startup isn't capital—it's guidance from those who've walked the
                path before."
              </blockquote>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register/startup">
                <Button size="lg" className="gap-1">
                  I'm a Startup
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register/mentor">
                <Button size="lg" variant="outline" className="gap-1">
                  I'm a Mentor
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="logo"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              src="/logo.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

