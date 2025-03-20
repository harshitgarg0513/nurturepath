"use client"

import { useState } from "react"
import { CalendarIcon, Clock, Plus, Check, ChevronDown } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calender"
import { cn } from "@/lib/utils"

export function ScheduleSession() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [duration, setDuration] = useState("60")
  const [isCalendarOpen, setIsCalendarOpen] = useState(false) // State for calendar popover
  const [startTimes, setStartTimes] = useState({
    monday: "9:00",
    tuesday: "9:00",
    wednesday: "13:00",
    thursday: "9:00",
    friday: "9:00",
  })
  const [endTimes, setEndTimes] = useState({
    monday: "17:00",
    tuesday: "17:00",
    wednesday: "18:00",
    thursday: "17:00",
    friday: "15:00",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  const updateStartTime = (day: string, time: string) => {
    setStartTimes((prev) => ({
      ...prev,
      [day]: time,
    }))
  }

  const updateEndTime = (day: string, time: string) => {
    setEndTimes((prev) => ({
      ...prev,
      [day]: time,
    }))
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Create New Session</CardTitle>
          <CardDescription>Set up a new mentorship session for startups to book</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Session Title</Label>
              <Input id="title" placeholder="e.g., Fundraising Strategy Session" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe what startups will learn in this session"
                className="min-h-[100px]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <div className="relative">
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)} // Toggle calendar visibility
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? date.toLocaleDateString() : "Select date"}
                  </Button>
                  {isCalendarOpen && ( // Render calendar conditionally
                    <div className="absolute z-50 mt-2 w-auto rounded-md border bg-popover p-2 shadow-md">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <div className="relative">
                  <select
                    id="duration"
                    className="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">2 hours</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price (USD)</Label>
              <Input id="price" type="number" min="0" placeholder="e.g., 150" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topics">Topics Covered</Label>
              <Input id="topics" placeholder="e.g., Fundraising, Pitch Deck, Investor Relations" required />
              <p className="text-xs text-muted-foreground">Separate topics with commas</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting || isSuccess}>
              {isSubmitting ? (
                <>
                  <Clock className="mr-2 h-4 w-4 animate-spin" />
                  Creating Session...
                </>
              ) : isSuccess ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Session Created!
                </>
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Session
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Availability</CardTitle>
          <CardDescription>Set your recurring availability for sessions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            {/* Monday */}
            <div className="flex items-center justify-between">
              <div className="font-medium">Monday</div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={startTimes.monday}
                    onChange={(e) => updateStartTime("monday", e.target.value)}
                  >
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
                <span>to</span>
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={endTimes.monday}
                    onChange={(e) => updateEndTime("monday", e.target.value)}
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Tuesday */}
            <div className="flex items-center justify-between">
              <div className="font-medium">Tuesday</div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={startTimes.tuesday}
                    onChange={(e) => updateStartTime("tuesday", e.target.value)}
                  >
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
                <span>to</span>
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={endTimes.tuesday}
                    onChange={(e) => updateEndTime("tuesday", e.target.value)}
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Wednesday */}
            <div className="flex items-center justify-between">
              <div className="font-medium">Wednesday</div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={startTimes.wednesday}
                    onChange={(e) => updateStartTime("wednesday", e.target.value)}
                  >
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
                <span>to</span>
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={endTimes.wednesday}
                    onChange={(e) => updateEndTime("wednesday", e.target.value)}
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Thursday */}
            <div className="flex items-center justify-between">
              <div className="font-medium">Thursday</div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={startTimes.thursday}
                    onChange={(e) => updateStartTime("thursday", e.target.value)}
                  >
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
                <span>to</span>
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={endTimes.thursday}
                    onChange={(e) => updateEndTime("thursday", e.target.value)}
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Friday */}
            <div className="flex items-center justify-between">
              <div className="font-medium">Friday</div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={startTimes.friday}
                    onChange={(e) => updateStartTime("friday", e.target.value)}
                  >
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
                <span>to</span>
                <div className="relative">
                  <select
                    className="w-[110px] h-10 rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm appearance-none"
                    value={endTimes.friday}
                    onChange={(e) => updateEndTime("friday", e.target.value)}
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Update Availability
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}