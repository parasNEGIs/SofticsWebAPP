import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function StudioProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Studio Projects</h1>
      <p className="text-muted-foreground mb-6">A showcase of our enterprise AI projects will be available soon.</p>
      <Link href="/studio/projects">
        <Button className="bg-[color:var(--saffron-orange)] text-white hover:bg-[color:var(--saffron-dark)] gap-2">
          See all projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
} 