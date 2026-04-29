import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent } from "@/components/ui/card"

/**
 * Billing Tab — Revenue operations.
 *
 * This is where money is collected and protected.
 *
 * Tracks:
 * - Invoices
 * - Subscriptions
 * - Payments
 * - Overdue accounts
 * - Failed payments
 * - Setup fees
 * - Recurring retainers
 * - Expansion billing
 *
 * This is your cashflow engine.
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
        <SiteHeader title="Billing" />
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
