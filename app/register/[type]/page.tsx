"use client"

import type React from "react"
import { useState ,useEffect} from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown } from "@/components/ui/icons"
export default function RegisterPage({ params }: { params: { type: string } }) {
  const router = useRouter()
  const isStartup = params.type === "startup"
  const [isLoading, setIsLoading] = useState(false)
  const [industry, setIndustry] = useState("")
  const [stage, setStage] = useState("")

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "E-commerce",
    "Manufacturing",
    "Marketing",
    "Food & Beverage",
    "Real Estate",
    "Entertainment",
    "Energy",
    "Transportation",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/dashboard/${params.type}`)
    }, 1500)
  }
  const IndustrySelector = ({ onIndustryChange }: { onIndustryChange: (industry: string) => void }) => {
    const [industry, setIndustry] = useState<string>("");
  
    useEffect(() => {
      const storedIndustry = localStorage.getItem("selectedIndustry") || "";
      setIndustry(storedIndustry);
    }, []);
  
    const handleIndustryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedIndustry = event.target.value;
      setIndustry(selectedIndustry);
      localStorage.setItem("selectedIndustry", selectedIndustry);
      onIndustryChange(selectedIndustry); // Pass to parent
    };
  }
  function handleIndustryChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    const selectedIndustry = event.target.value;
    setIndustry(selectedIndustry);
    localStorage.setItem("selectedIndustry", selectedIndustry);
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-8">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center mb-4 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>

        <Card>
          <CardHeader>
            <CardTitle>Create your {isStartup ? "Startup" : "Mentor"} Account</CardTitle>
            <CardDescription>
              {isStartup
                ? "Join our platform to connect with industry mentors and accelerate your growth."
                : "Share your expertise with startups and help shape the next generation of businesses."}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{isStartup ? "Startup Name" : "Full Name"}</Label>
                <Input id="name" placeholder={isStartup ? "Your Startup Name" : "Your Full Name"} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="email@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <div className="relative">
                  <select
                    id="industry"
                    className="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={industry}
                    onChange={handleIndustryChange}
                    required
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {industries.map((ind) => (
                      <option key={ind} value={ind.toLowerCase()}>
                        {ind}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
              </div>

              {isStartup ? (
                <div className="space-y-2">
                  <Label htmlFor="stage">Startup Stage</Label>
                  <div className="relative">
                    <select
                      id="stage"
                      className="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={stage}
                      onChange={(e) => setStage(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select your startup stage
                      </option>
                      <option value="idea">Idea Stage</option>
                      <option value="mvp">MVP</option>
                      <option value="early">Early Traction</option>
                      <option value="growth">Growth Stage</option>
                      <option value="scaling">Scaling</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="expertise">Areas of Expertise</Label>
                  <Textarea id="expertise" placeholder="Describe your areas of expertise and experience" required />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4" />
                    Creating Account...
                  </>
                ) : (
                  `Create ${isStartup ? "Startup" : "Mentor"} Account`
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}

