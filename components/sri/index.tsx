import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Command } from "lucide-react"

interface SriProps {
  domain: "studio" | "labs" | "main"
}

export function Sri({ domain }: SriProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isCommandBarOpen, setIsCommandBarOpen] = useState(false)
  const [message, setMessage] = useState("")

  // Handle command bar shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isCommandBarOpen) {
        e.preventDefault()
        setIsCommandBarOpen(true)
      }
      if (e.key === "Escape" && isCommandBarOpen) {
        setIsCommandBarOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isCommandBarOpen])

  // Handle Sri's breathing animation
  const breathingAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      {/* Sri Avatar */}
      <motion.div
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "w-20 h-20 rounded-full bg-purple-500",
          "cursor-pointer shadow-lg",
          "flex items-center justify-center"
        )}
        initial="initial"
        animate="animate"
        variants={breathingAnimation}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-white text-2xl">Sri</span>
      </motion.div>

      {/* Command Bar Modal */}
      <AnimatePresence>
        {isCommandBarOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setIsCommandBarOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl mx-4 p-6 bg-background rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Command className="w-5 h-5 text-purple-500" />
                <h2 className="text-xl font-semibold">Command Bar</h2>
              </div>
              <Input
                placeholder="Ask Sri anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mb-4"
              />
              <div className="flex justify-end space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIsCommandBarOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-purple-500 hover:bg-purple-600"
                  onClick={() => {
                    // Handle message submission
                    setIsCommandBarOpen(false)
                  }}
                >
                  Send
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Sri Chat */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-background rounded-lg shadow-xl border"
          >
            <div className="p-4 border-b">
              <h3 className="font-semibold">Chat with Sri</h3>
            </div>
            <div className="p-4 h-[calc(500px-8rem)] overflow-y-auto">
              {/* Chat messages will go here */}
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  className="bg-purple-500 hover:bg-purple-600"
                  onClick={() => {
                    // Handle message submission
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 