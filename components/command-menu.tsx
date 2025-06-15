"use client"

import { useEffect, useState } from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Bot, Code, FileCode, Home, LayoutDashboard, Mail, MessageSquare } from "lucide-react"

export function CommandMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => {
                window.location.href = "/"
                setOpen(false)
              }}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                window.location.href = "/#services"
                setOpen(false)
              }}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Services</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                window.location.href = "/#projects"
                setOpen(false)
              }}
            >
              <FileCode className="mr-2 h-4 w-4" />
              <span>Labs</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                window.location.href = "/#sri"
                setOpen(false)
              }}
            >
              <Bot className="mr-2 h-4 w-4" />
              <span>Sri</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                window.location.href = "/#contact"
                setOpen(false)
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Sri Commands">
            <CommandItem
              onSelect={() => {
                console.log("Opening Sri chat")
                setOpen(false)
              }}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Chat with Sri</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                console.log("Showing Sri capabilities")
                setOpen(false)
              }}
            >
              <Code className="mr-2 h-4 w-4" />
              <span>Sri Capabilities</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
