"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  viewportRef?: React.RefObject<HTMLDivElement>
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, viewportRef, ...props }, ref) => {
    const internalViewportRef = React.useRef<HTMLDivElement>(null)
    const resolvedViewportRef = viewportRef || internalViewportRef

    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
        <div ref={resolvedViewportRef} className="h-full w-full overflow-auto">
          {children}
        </div>
      </div>
    )
  },
)
ScrollArea.displayName = "ScrollArea"

export { ScrollArea }

