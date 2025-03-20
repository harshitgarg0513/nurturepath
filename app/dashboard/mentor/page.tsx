"use client"
import { Search, Bell, Calendar, Users, Clock, DollarSign, BarChart4, TrendingUp } from "@/components/ui/icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ScheduleSession } from "@/components/schedule-session"
import { UpcomingSession } from "@/components/upcoming-session"
import { EarningsCard } from "@/components/earnings-card"

export default function MentorDashboard() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Mentor Dashboard"
        text="Manage your sessions, track earnings, and connect with startups."
      >
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32&text=JD" alt="@user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </DashboardHeader>

      <Tabs defaultValue="schedule" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="schedule" className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Schedule Sessions</span>
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">Upcoming Sessions</span>
            </TabsTrigger>
            <TabsTrigger value="earnings" className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Earnings & Incentives</span>
            </TabsTrigger>
          </TabsList>

          <div className="relative w-full max-w-[200px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8 h-9" />
          </div>
        </div>

        <TabsContent value="schedule" className="space-y-4">
          <ScheduleSession />
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <UpcomingSession
              startupName="TechStart"
              contactName="Sarah Johnson"
              date="Tomorrow, 2:00 PM"
              duration="60 minutes"
              topic="Fundraising Strategy"
              imageUrl="/placeholder.svg?height=40&width=40&text=TS"
              status="confirmed"
            />
            <UpcomingSession
              startupName="HealthTech Innovations"
              contactName="Michael Chen"
              date="Friday, 10:00 AM"
              duration="90 minutes"
              topic="Regulatory Compliance"
              imageUrl="/placeholder.svg?height=40&width=40&text=HT"
              status="confirmed"
            />
            <UpcomingSession
              startupName="EcoSolutions"
              contactName="Aisha Patel"
              date="Next Monday, 3:00 PM"
              duration="60 minutes"
              topic="Market Entry Strategy"
              imageUrl="/placeholder.svg?height=40&width=40&text=ES"
              status="pending"
            />
            <UpcomingSession
              startupName="FinTech Global"
              contactName="David Rodriguez"
              date="Wednesday, 1:00 PM"
              duration="60 minutes"
              topic="Financial Modeling"
              imageUrl="/placeholder.svg?height=40&width=40&text=FG"
              status="confirmed"
            />
            <UpcomingSession
              startupName="EdTech Pioneers"
              contactName="Emma Thompson"
              date="Thursday, 11:00 AM"
              duration="45 minutes"
              topic="Product Development"
              imageUrl="/placeholder.svg?height=40&width=40&text=EP"
              status="pending"
            />
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline">View All Sessions</Button>
          </div>
        </TabsContent>

        <TabsContent value="earnings" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <EarningsCard
              title="Total Earnings"
              amount="$4,250"
              period="This Month"
              change={12.5}
              icon={<DollarSign className="h-4 w-4" />}
            />
            <EarningsCard
              title="Sessions Completed"
              amount="18"
              period="This Month"
              change={8.3}
              icon={<Users className="h-4 w-4" />}
            />
            <EarningsCard
              title="Average Rating"
              amount="4.8"
              period="Out of 5"
              change={0.2}
              icon={<BarChart4 className="h-4 w-4" />}
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Earnings History</CardTitle>
              <CardDescription>Track your earnings over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <div className="text-center">
                  <BarChart4 className="h-16 w-16 mx-auto text-muted-foreground/60" />
                  <p className="mt-2 text-sm text-muted-foreground">Earnings chart visualization would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Incentives & Bonuses</CardTitle>
              <CardDescription>Special rewards for top mentors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Session Milestone Bonus</h4>
                      <p className="text-sm text-muted-foreground">Complete 25 sessions this month</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$250 Bonus</p>
                    <p className="text-sm text-muted-foreground">18/25 Completed</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Referral Program</h4>
                      <p className="text-sm text-muted-foreground">Earn for each mentor you refer</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$100 per Referral</p>
                    <p className="text-sm text-muted-foreground">2 Successful Referrals</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <BarChart4 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Top Rated Mentor</h4>
                      <p className="text-sm text-muted-foreground">Maintain 4.8+ rating with 10+ reviews</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">15% Rate Increase</p>
                    <p className="text-sm text-muted-foreground">Currently Eligible</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

