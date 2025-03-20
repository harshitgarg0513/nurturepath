"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "./icons"

export type CalendarProps = {
  mode?: "single" | "range" | "multiple"
  selected?: Date | Date[] | { from: Date; to: Date }
  onSelect?: (date: Date) => void
  className?: string
  initialFocus?: boolean
}

export function Calendar({ mode = "single", selected, onSelect, className, initialFocus }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())
  const [focusedDay, setFocusedDay] = React.useState<number | null>(null)

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const previousMonthDays = Array.from(
    { length: firstDayOfMonth },
    (_, i) => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate() - i,
  ).reverse()

  const nextMonthDays = Array.from({ length: 42 - (previousMonthDays.length + days.length) }, (_, i) => i + 1)

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const isSelected = (day: number) => {
    if (!selected) return false

    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)

    if (selected instanceof Date) {
      return date.toDateString() === selected.toDateString()
    }

    return false
  }

  const handleSelectDay = (day: number) => {
    if (onSelect) {
      onSelect(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
    }
  }

  return (
    <div className={cn("p-3", className)}>
      <div className="flex items-center justify-between">
        <button
          onClick={handlePreviousMonth}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0"
          type="button"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous month</span>
        </button>
        <h2 className="text-sm font-medium">
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0"
          type="button"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next month</span>
        </button>
      </div>
      <div className="mt-4 grid grid-cols-7 text-center text-xs leading-6 text-muted-foreground">
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-center">
        {previousMonthDays.map((day, index) => (
          <div key={`prev-${index}`} className="text-muted-foreground opacity-50 text-sm p-2">
            {day}
          </div>
        ))}
        {days.map((day) => (
          <div
            key={day}
            className={cn(
              "text-sm p-2 cursor-pointer rounded-md hover:bg-accent",
              isSelected(day) && "bg-primary text-primary-foreground",
            )}
            onClick={() => handleSelectDay(day)}
            tabIndex={0}
            role="button"
          >
            {day}
          </div>
        ))}
        {nextMonthDays.map((day, index) => (
          <div key={`next-${index}`} className="text-muted-foreground opacity-50 text-sm p-2">
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}

