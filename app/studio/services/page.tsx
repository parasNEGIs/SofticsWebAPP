import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function StudioServicesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Studio Services</h1>
      <p className="text-muted-foreground mb-6">Detailed information about our professional AI services will be available soon.</p>
      <Link href="/studio/services">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
          See all services
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
} 