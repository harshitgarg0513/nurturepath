// "use client"

// import * as React from "react"
// import { cn } from "@/lib/utils"

// interface PopoverProps {
//   open?: boolean
//   onOpenChange?: (open: boolean) => void
//   children: React.ReactNode
// }

// const PopoverContext = React.createContext<{
//   open: boolean
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>
// }>({
//   open: false,
//   setOpen: () => { throw new Error("setOpen function must be overridden"); },
// })

// function Popover({ children, open, onOpenChange }: PopoverProps) {
//   const [isOpen, setIsOpen] = React.useState(open || false)

//   React.useEffect(() => {
//     if (open !== undefined) {
//       setIsOpen(open)
//     }
//   }, [open])

//   React.useEffect(() => {
//     if (onOpenChange) {
//       onOpenChange(isOpen)
//     }
//   }, [isOpen, onOpenChange])

//   return <PopoverContext.Provider value={{ open: isOpen, setOpen: setIsOpen }}>{children}</PopoverContext.Provider>
// }

// interface PopoverTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   asChild?: boolean
// }

// const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
//   ({ className, asChild, children, ...props }, ref) => {
//     const { setOpen } = React.useContext(PopoverContext)

//     if (asChild && React.isValidElement(children)) {
//       // Clone the child element and merge its props with the new ones
//       return React.cloneElement(children, {
//         ...props,
//         ref,
//         onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
//           setOpen((prev) => !prev)
//           if (children.props.onClick) {
//             children.props.onClick(e) // Call the original onClick handler
//           }
//         },
//       })
//     }

//     return (
//       <button
//         ref={ref}
//         className={className}
//         onClick={() => setOpen((prev) => !prev)}
//         {...props}
//       >
//         {children}
//       </button>
//     )
//   }
// )

// PopoverTrigger.displayName = "PopoverTrigger"

// const PopoverContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
//   ({ className, ...props }, ref) => {
//     const { open } = React.useContext(PopoverContext)

//     if (!open) return null

//     return (
//       <div
//         ref={ref}
//         className={cn(
//           "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//           className
//         )}
//         {...props}
//       />
//     )
//   }
// )

// PopoverContent.displayName = "PopoverContent"

// export { Popover, PopoverTrigger, PopoverContent }