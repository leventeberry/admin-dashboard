import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { DataTable } from "@/components/data-table"
import { PlusIcon } from "lucide-react"

import workflows from "./data.json"

/**
 * Workflows Tab — Automation execution center.
 *
 * This is where system actions are verified.
 *
 * Tracks:
 * - n8n workflow runs
 * - Webhook executions
 * - Failures
 * - Retries
 * - Submission confirmations
 * - Follow-up sequences
 * - Calendar events
 * - Lead stage automation
 *
 * This is your automation engine.
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
        <SiteHeader title="Workflows" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="flex items-center justify-between px-4 lg:px-6">
                <h1 className="font-bold text-2xl">Workflow Admin</h1>
                <Button size="sm" className="gap-2">
                  <PlusIcon className="w-4 h-4" />
                  New Workflow
                </Button>
              </div>
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Workflows</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-muted">
                        <thead>
                          <tr>
                            <th className="py-2 px-4 text-left text-xs font-semibold">Name</th>
                            <th className="py-2 px-4 text-left text-xs font-semibold">Owner</th>
                            <th className="py-2 px-4 text-left text-xs font-semibold">Status</th>
                            <th className="py-2 px-4 text-left text-xs font-semibold">Steps</th>
                            <th className="py-2 px-4 text-left text-xs font-semibold">Last Updated</th>
                            <th className="py-2 px-4"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {workflows.map((wf) => (
                            <tr key={wf.id} className="border-t">
                              <td className="py-2 px-4">{wf.name}</td>
                              <td className="py-2 px-4">{wf.owner}</td>
                              <td className="py-2 px-4">
                                <span
                                  className={
                                    wf.status === "Active"
                                      ? "text-green-600 font-medium"
                                      : wf.status === "Inactive"
                                      ? "text-gray-400 font-medium"
                                      : "text-yellow-600 font-medium"
                                  }
                                >
                                  {wf.status}
                                </span>
                              </td>
                              <td className="py-2 px-4">{wf.steps}</td>
                              <td className="py-2 px-4">{wf.updated}</td>
                              <td className="py-2 px-4 text-right">
                                <Button size="sm" variant="outline">
                                  Edit
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}