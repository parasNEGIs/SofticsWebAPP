'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Search } from 'lucide-react'

// Dynamically import framer-motion components
const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: false }
)
const AnimatePresence = dynamic(
  () => import('framer-motion').then(mod => mod.AnimatePresence),
  { ssr: false }
)

interface CommandMenuProps {
  variant?: 'default' | 'labs'
}

export function CommandMenu({ variant = 'default' }: CommandMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isLabs = variant === 'labs'

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
          isLabs 
            ? 'bg-labs-muted text-labs-muted-foreground hover:bg-labs-muted/80' 
            : 'bg-muted text-muted-foreground hover:bg-muted/80'
        } transition-colors`}
      >
        <Search className="h-4 w-4" />
        <span className="hidden md:inline">Search...</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed inset-0 z-50 flex items-start justify-center p-4 ${
              isLabs ? 'bg-labs-background/80' : 'bg-background/80'
            } backdrop-blur-sm`}
          >
            <div 
              className={`w-full max-w-2xl rounded-lg border shadow-lg ${
                isLabs 
                  ? 'bg-labs-background border-labs-border' 
                  : 'bg-background border-border'
              }`}
            >
              <div className="flex items-center border-b px-4 py-3">
                <Search className="h-4 w-4 mr-2 opacity-50" />
                <input
                  type="text"
                  placeholder="Search commands..."
                  className={`w-full bg-transparent outline-none ${
                    isLabs ? 'text-labs-foreground' : 'text-foreground'
                  }`}
                  autoFocus
                />
              </div>
              <div className="p-2">
                <div className={`text-sm ${
                  isLabs ? 'text-labs-muted-foreground' : 'text-muted-foreground'
                }`}>
                  No results found.
                </div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  )
} 