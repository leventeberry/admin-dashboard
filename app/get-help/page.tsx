import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"

/**
 * Get Help — Support + operational assistance center.
 *
 * This is where admins resolve issues and access guidance.
 *
 * Tracks:
 * - Internal documentation
 * - Troubleshooting guides
 * - Onboarding resources
 * - Support requests
 * - Emergency procedures
 * - Workflow recovery steps
 * - Incident response guides
 * - Escalation paths
 *
 * This is your support engine.
 */
export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title="Get Help" />
        <div className="flex flex-1 items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardContent className="flex items-center justify-center py-16">
              <p className="text-2xl font-semibold text-muted-foreground">
                Coming Soon
              </p>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
