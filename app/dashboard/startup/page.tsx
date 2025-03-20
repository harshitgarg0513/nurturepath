"use client"

import { useState } from "react"
import { Search, Bell, Calendar, Users, BookOpen, BarChart, Filter, Clock, BookMarked } from "@/components/ui/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { MentorCard } from "@/components/mentor-card"
import { SessionCard } from "@/components/session-card"
import { FeedItem } from "@/components/feed-item"
import { ProcessGuide } from "@/components/process-guide"

export default function StartupDashboard() {
  const [activeTab, setActiveTab] = useState("mentors")

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Startup Dashboard"
        text="Find mentors, join sessions, and access resources to grow your business."
      >
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32&text=TS" alt="@user" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
        </div>
      </DashboardHeader>

      <Tabs defaultValue="mentors" className="space-y-4" onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="mentors" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Mentors</span>
            </TabsTrigger>
            <TabsTrigger value="sessions" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Live Sessions</span>
            </TabsTrigger>
            <TabsTrigger value="feed" className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Industry Feed</span>
            </TabsTrigger>
            <TabsTrigger value="process" className="flex items-center gap-1">
              <BarChart className="h-4 w-4" />
              <span className="hidden sm:inline">Process Guide</span>
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            {activeTab === "mentors" && (
              <Button size="sm" variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            )}
            {activeTab === "sessions" && (
              <Button size="sm" variant="outline">
                <Clock className="h-4 w-4 mr-2" />
                Upcoming
              </Button>
            )}
            {activeTab === "feed" && (
              <Button size="sm" variant="outline">
                <BookMarked className="h-4 w-4 mr-2" />
                Saved
              </Button>
            )}
            <div className="relative w-full max-w-[200px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-8 h-9" />
            </div>
          </div>
        </div>

        <TabsContent value="mentors" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MentorCard
              name="Dr. Emily Chen"
              role="CTO at TechGrowth"
              industry="Technology"
              rating={4.9}
              reviews={124}
              hourlyRate={150}
              imageUrl="/placeholder.svg?height=100&width=100&text=EC"
              availability="Available next week"
              specialties={["Product Development", "Tech Strategy", "Scaling"]}
            />
            <MentorCard
              name="James Wilson"
              role="Former CFO at FinanceHub"
              industry="Finance"
              rating={4.8}
              reviews={98}
              hourlyRate={175}
              imageUrl="/placeholder.svg?height=100&width=100&text=JW"
              availability="Available tomorrow"
              specialties={["Fundraising", "Financial Planning", "Investor Relations"]}
            />
            <MentorCard
              name="Sarah Johnson"
              role="Marketing Director at BrandBoost"
              industry="Marketing"
              rating={4.7}
              reviews={86}
              hourlyRate={125}
              imageUrl="/placeholder.svg?height=100&width=100&text=SJ"
              availability="Available this week"
              specialties={["Digital Marketing", "Brand Strategy", "Growth Hacking"]}
            />
            <MentorCard
              name="Michael Rodriguez"
              role="Founder of HealthTech Innovations"
              industry="Healthcare"
              rating={4.9}
              reviews={112}
              hourlyRate={160}
              imageUrl="/placeholder.svg?height=100&width=100&text=MR"
              availability="Limited availability"
              specialties={["Healthcare Tech", "Regulatory Compliance", "Market Entry"]}
            />
            <MentorCard
              name="Aisha Patel"
              role="VP of Operations at LogisticsPro"
              industry="Manufacturing"
              rating={4.6}
              reviews={74}
              hourlyRate={140}
              imageUrl="/placeholder.svg?height=100&width=100&text=AP"
              availability="Available next week"
              specialties={["Supply Chain", "Operations", "Process Optimization"]}
            />
            <MentorCard
              name="David Thompson"
              role="Angel Investor & Advisor"
              industry="Technology"
              rating={4.9}
              reviews={156}
              hourlyRate={200}
              imageUrl="/placeholder.svg?height=100&width=100&text=DT"
              availability="Limited availability"
              specialties={["Fundraising", "Pitch Preparation", "Strategic Planning"]}
            />
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline">Load More Mentors</Button>
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <SessionCard
              title="Fundraising Strategies for Early-Stage Startups"
              speaker="David Thompson"
              role="Angel Investor & Advisor"
              date="Tomorrow, 2:00 PM"
              duration="60 minutes"
              attendees={42}
              imageUrl="/placeholder.svg?height=100&width=100&text=DT"
              tags={["Fundraising", "Pitch", "Investment"]}
              isLive={false}
            />
            <SessionCard
              title="Product-Market Fit: How to Know You've Found It"
              speaker="Emily Chen"
              role="CTO at TechGrowth"
              date="Today, 4:00 PM"
              duration="90 minutes"
              attendees={78}
              imageUrl="/placeholder.svg?height=100&width=100&text=EC"
              tags={["Product", "Market Research", "Strategy"]}
              isLive={true}
            />
            <SessionCard
              title="Financial Modeling for Startups"
              speaker="James Wilson"
              role="Former CFO at FinanceHub"
              date="Friday, 1:00 PM"
              duration="120 minutes"
              attendees={35}
              imageUrl="/placeholder.svg?height=100&width=100&text=JW"
              tags={["Finance", "Planning", "Forecasting"]}
              isLive={false}
            />
            <SessionCard
              title="Growth Marketing on a Budget"
              speaker="Sarah Johnson"
              role="Marketing Director at BrandBoost"
              date="Next Monday, 11:00 AM"
              duration="60 minutes"
              attendees={56}
              imageUrl="/placeholder.svg?height=100&width=100&text=SJ"
              tags={["Marketing", "Growth", "Budget"]}
              isLive={false}
            />
            <SessionCard
              title="Navigating Regulatory Challenges in Healthcare"
              speaker="Michael Rodriguez"
              role="Founder of HealthTech Innovations"
              date="Wednesday, 3:00 PM"
              duration="90 minutes"
              attendees={28}
              imageUrl="/placeholder.svg?height=100&width=100&text=MR"
              tags={["Healthcare", "Regulation", "Compliance"]}
              isLive={false}
            />
            <SessionCard
              title="Building Efficient Supply Chains"
              speaker="Aisha Patel"
              role="VP of Operations at LogisticsPro"
              date="Thursday, 10:00 AM"
              duration="75 minutes"
              attendees={31}
              imageUrl="/placeholder.svg?height=100&width=100&text=AP"
              tags={["Operations", "Supply Chain", "Logistics"]}
              isLive={false}
            />
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline">View All Sessions</Button>
          </div>
        </TabsContent>

        <TabsContent value="feed" className="space-y-4">
          <div className="h-[600px] overflow-auto pr-4">
            <div className="space-y-4">
              <FeedItem
                title="10 Fundraising Mistakes to Avoid in 2025"
                author="David Thompson"
                role="Angel Investor & Advisor"
                date="2 hours ago"
                content="Many startups make critical mistakes when approaching investors. Here are the top 10 pitfalls to avoid when seeking funding in today's competitive landscape..."
                imageUrl="/placeholder.svg?height=100&width=100&text=DT"
                tags={["Fundraising", "Investment", "Venture Capital"]}
                likes={42}
                comments={8}
              />
              <FeedItem
                title="Case Study: How We Achieved Product-Market Fit in 6 Months"
                author="Emily Chen"
                role="CTO at TechGrowth"
                date="Yesterday"
                content="Our journey to product-market fit was filled with pivots and learnings. In this case study, I break down the exact process we used to validate our assumptions and find our ideal customer segment..."
                imageUrl="/placeholder.svg?height=100&width=100&text=EC"
                tags={["Product", "Case Study", "Growth"]}
                likes={87}
                comments={23}
              />
              <FeedItem
                title="Financial Metrics Every Founder Should Track"
                author="James Wilson"
                role="Former CFO at FinanceHub"
                date="2 days ago"
                content="Beyond revenue and burn rate, there are several key financial metrics that can provide early warning signs for your startup. Here's what you should be monitoring monthly..."
                imageUrl="/placeholder.svg?height=100&width=100&text=JW"
                tags={["Finance", "Metrics", "Management"]}
                likes={65}
                comments={12}
              />
              <FeedItem
                title="How We Grew Our User Base by 300% with Zero Marketing Budget"
                author="Sarah Johnson"
                role="Marketing Director at BrandBoost"
                date="3 days ago"
                content="Organic growth strategies can be incredibly powerful when executed correctly. In this article, I share the exact tactics we used to triple our user base without spending a dollar on paid acquisition..."
                imageUrl="/placeholder.svg?height=100&width=100&text=SJ"
                tags={["Marketing", "Growth", "Organic"]}
                likes={124}
                comments={31}
              />
              <FeedItem
                title="Navigating FDA Approval: A Startup's Guide"
                author="Michael Rodriguez"
                role="Founder of HealthTech Innovations"
                date="4 days ago"
                content="The FDA approval process can be daunting for healthcare startups. Based on our experience bringing three products to market, here's a practical roadmap to help you navigate the regulatory landscape..."
                imageUrl="/placeholder.svg?height=100&width=100&text=MR"
                tags={["Healthcare", "Regulation", "FDA"]}
                likes={38}
                comments={9}
              />
              <FeedItem
                title="Supply Chain Optimization Strategies for Early-Stage Companies"
                author="Aisha Patel"
                role="VP of Operations at LogisticsPro"
                date="5 days ago"
                content="Even with limited resources, startups can implement robust supply chain practices. Here are five strategies we've implemented with our clients to reduce costs and improve reliability..."
                imageUrl="/placeholder.svg?height=100&width=100&text=AP"
                tags={["Operations", "Supply Chain", "Optimization"]}
                likes={52}
                comments={7}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="process" className="space-y-4">
          <ProcessGuide />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

