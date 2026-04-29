import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"

/**
 * Audit Log Tab — Trust + accountability layer.
 *
 * This is where system history is preserved.
 *
 * Tracks:
 * - Admin actions
 * - Lead updates
 * - Settings changes
 * - Workflow triggers
 * - Prompt changes
 * - Deployment changes
 * - Permission updates
 * - Critical system events
 *
 * This is your accountability engine.
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
        <SiteHeader title="Audit Log" />
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
