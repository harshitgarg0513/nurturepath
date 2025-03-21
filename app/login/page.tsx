"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Loader2 } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("startup")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/dashboard/${activeTab}`)
    }, 1500)
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
            <CardTitle>Log in to Nurture Path</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="startup" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="startup">Startup</TabsTrigger>
                <TabsTrigger value="mentor">Mentor</TabsTrigger>
              </TabsList>
              <TabsContent value="startup">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="startup-email">Email</Label>
                    <Input id="startup-email" type="email" placeholder="email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="startup-password">Password</Label>
                      <Link href="#" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="startup-password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4" />
                        Logging in...
                      </>
                    ) : (
                      "Log in as Startup"
                    )}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="mentor">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="mentor-email">Email</Label>
                    <Input id="mentor-email" type="email" placeholder="email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mentor-password">Password</Label>
                      <Link href="#" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="mentor-password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4" />
                        Logging in...
                      </>
                    ) : (
                      "Log in as Mentor"
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">Don't have an account yet?</div>
            <div className="flex gap-4 w-full">
              <Link href="/register/startup" className="w-1/2">
                <Button variant="outline" className="w-full">
                  Register as Startup
                </Button>
              </Link>
              <Link href="/register/mentor" className="w-1/2">
                <Button variant="outline" className="w-full">
                  Register as Mentor
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

