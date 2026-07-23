/* eslint-disable react-refresh/only-export-components */
import type { AdminData } from "../api/admin";
import { Badge } from "../components/Badge";
import { DataTable } from "../components/DataTable";
import { PageHeader } from "../components/PageHeader";
import { Panel } from "../components/Panel";
import { RevenueChart } from "../components/RevenueChart";
import { StatGrid } from "../components/StatGrid";

export type PageKey =
  | "dashboard"
  | "products"
  | "categories"
  | "inventory"
  | "orders"
  | "reviews"
  | "customers"
  | "admins"
  | "ai"
  | "mcp"
  | "analytics"
  | "audit"
  | "settings";

export const pageTitles: Record<PageKey, string> = {
  dashboard: "Dashboard",
  products: "Products",
  categories: "Categories",
  inventory: "Inventory",
  orders: "Orders",
  reviews: "Reviews",
  customers: "Customers",
  admins: "Administrators",
  ai: "AI Management",
  mcp: "MCP Management",
  analytics: "Analytics",
  audit: "Audit Logs",
  settings: "Settings",
};

export const pageRoutes: Record<PageKey, string> = {
  dashboard: "/",
  products: "/product",
  categories: "/categorires",
  inventory: "/inventory",
  orders: "/orders",
  reviews: "/reviews",
  customers: "/customers",
  admins: "/administrators",
  ai: "/ai",
  mcp: "/mcp",
  analytics: "/analytics",
  audit: "/audit-logs",
  settings: "/settings",
};

export function renderPage(page: PageKey, data: AdminData) {
  const syncedAt = new Date(data.generatedAt).toLocaleTimeString();

  switch (page) {
    case "products":
      return <ProductsPage data={data} syncedAt={syncedAt} />;
    case "categories":
      return <CategoriesPage data={data} syncedAt={syncedAt} />;
    case "inventory":
      return <InventoryPage data={data} syncedAt={syncedAt} />;
    case "orders":
      return <OrdersPage data={data} syncedAt={syncedAt} />;
    case "reviews":
      return <ReviewsPage data={data} syncedAt={syncedAt} />;
    case "customers":
      return <CustomersPage data={data} syncedAt={syncedAt} />;
    case "admins":
      return <AdminsPage data={data} syncedAt={syncedAt} />;
    case "ai":
      return <AiPage data={data} syncedAt={syncedAt} />;
    case "mcp":
      return <McpPage data={data} syncedAt={syncedAt} />;
    case "analytics":
      return <AnalyticsPage data={data} syncedAt={syncedAt} />;
    case "audit":
      return <AuditPage data={data} syncedAt={syncedAt} />;
    case "settings":
      return <SettingsPage data={data} syncedAt={syncedAt} />;
    default:
      return <DashboardPage data={data} syncedAt={syncedAt} />;
  }
}

function DashboardPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Super Admin"
        title="Operations console"
        description="Monitor commerce, catalog, AI, MCP tools, and system health from one admin workspace."
        syncedAt={syncedAt}
      />
      <StatGrid stats={data.stats} />
      <section className="grid grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)] gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <Panel title="Revenue overview" eyebrow="Analytics" wide>
          <RevenueChart values={data.revenue} />
        </Panel>
        <Panel title="Recent activity" eyebrow="Activity">
          <ul className="grid gap-3.5">
            {data.activities.map((activity) => (
              <li
                className="border-l-4 border-blue-600 pl-3 leading-6 text-slate-700"
                key={activity.event}
              >
                <strong className="block">{activity.event}</strong>
                <span className="mt-1 block text-xs text-slate-500">
                  {activity.owner} · {activity.time}
                </span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="AI & MCP health" eyebrow="Platform">
          <MetricRows rows={data.aiMetrics} />
        </Panel>
      </section>
    </>
  );
}

function ProductsPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Products"
        description="Search, filter, import, export, and manage product lifecycle details."
        syncedAt={syncedAt}
      />
      <ToolRow actions={["Search products", "Filter", "Export", "Import", "Bulk actions"]} />
      <Panel title="Product table" eyebrow="Manage">
        <DataTable
          rows={data.products}
          columns={[
            { key: "name", label: "Product Name" },
            { key: "sku", label: "SKU" },
            { key: "category", label: "Category" },
            { key: "price", label: "Price" },
            { key: "stock", label: "Stock" },
            { key: "status", label: "Status", render: (row) => <Badge value={row.status} /> },
          ]}
        />
      </Panel>
      <EditGrid
        fields={[
          "Product Name",
          "Description",
          "Brand",
          "SKU",
          "Barcode",
          "Category",
          "Price",
          "Discount",
          "Stock Quantity",
          "Images",
          "Specifications",
          "Product Status",
        ]}
      />
    </>
  );
}

function CategoriesPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Categories"
        description="Organize parent categories, category imagery, and storefront grouping."
        syncedAt={syncedAt}
      />
      <ToolRow actions={["Create Category", "Edit", "Delete", "Parent Categories"]} />
      <Panel title="Category structure" eyebrow="Catalog">
        <DataTable
          rows={data.categories}
          columns={[
            { key: "name", label: "Category" },
            { key: "parent", label: "Parent" },
            { key: "products", label: "Products" },
            { key: "status", label: "Status", render: (row) => <Badge value={row.status} /> },
          ]}
        />
      </Panel>
    </>
  );
}

function InventoryPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Catalog"
        title="Inventory"
        description="Track current, reserved, and available stock across warehouses."
        syncedAt={syncedAt}
      />
      <ToolRow actions={["Increase Stock", "Decrease Stock", "Stock History"]} />
      <Panel title="Warehouse inventory" eyebrow="Stock">
        <DataTable
          rows={data.inventory.map((item) => ({
            ...item,
            available: item.current - item.reserved,
          }))}
          columns={[
            { key: "product", label: "Product" },
            { key: "current", label: "Current" },
            { key: "reserved", label: "Reserved" },
            { key: "available", label: "Available" },
            { key: "warehouse", label: "Warehouse" },
            { key: "updated", label: "Last Updated" },
          ]}
        />
      </Panel>
    </>
  );
}

function OrdersPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Sales"
        title="Orders"
        description="Review payment state, fulfillment status, refunds, and cancellation workflows."
        syncedAt={syncedAt}
      />
      <ToolRow actions={["View", "Update Status", "Refund", "Cancel Order"]} />
      <Panel title="Order queue" eyebrow="Sales">
        <DataTable
          rows={data.orders}
          columns={[
            { key: "id", label: "Order ID" },
            { key: "customer", label: "Customer" },
            { key: "total", label: "Total" },
            { key: "payment", label: "Payment", render: (row) => <Badge value={row.payment} /> },
            { key: "status", label: "Order Status", render: (row) => <Badge value={row.status} /> },
          ]}
        />
      </Panel>
      <StatusStrip
        values={["Pending", "Confirmed", "Processing", "Shipped", "Delivered", "Cancelled"]}
      />
    </>
  );
}

function ReviewsPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Sales"
        title="Reviews"
        description="Moderate customer feedback and reported product reviews."
        syncedAt={syncedAt}
      />
      <ToolRow actions={["Approve Review", "Reject Review", "Delete Review", "Reported Reviews"]} />
      <Panel title="Review moderation" eyebrow="Queue">
        <DataTable
          rows={data.reviews}
          columns={[
            { key: "product", label: "Product" },
            { key: "customer", label: "Customer" },
            { key: "rating", label: "Rating" },
            { key: "status", label: "Status", render: (row) => <Badge value={row.status} /> },
          ]}
        />
      </Panel>
    </>
  );
}

function CustomersPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="User Management"
        title="Customers"
        description="Inspect profiles, order counts, account status, and support actions."
        syncedAt={syncedAt}
      />
      <ToolRow actions={["View Profile", "Suspend Account", "Reset Password", "Delete Account"]} />
      <Panel title="Customer accounts" eyebrow="Accounts">
        <DataTable
          rows={data.customers}
          columns={[
            { key: "name", label: "Full Name" },
            { key: "email", label: "Email" },
            { key: "orders", label: "Orders" },
            { key: "status", label: "Status", render: (row) => <Badge value={row.status} /> },
          ]}
        />
      </Panel>
    </>
  );
}

function AdminsPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Super Admin"
        title="Administrators"
        description="Manage administrator roles, permissions, account state, and access recovery."
        syncedAt={syncedAt}
      />
      <ToolRow
        actions={["Create Administrator", "Assign Permissions", "Suspend", "Reset Password"]}
      />
      <Panel title="Administrator accounts" eyebrow="Restricted">
        <DataTable
          rows={data.admins}
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "role", label: "Role" },
            { key: "status", label: "Status", render: (row) => <Badge value={row.status} /> },
          ]}
        />
      </Panel>
    </>
  );
}

function AiPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="AI Management"
        title="AI services"
        description="Monitor requests, model usage, response time, token usage, and configuration."
        syncedAt={syncedAt}
      />
      <section className="grid grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)] gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <Panel title="AI metrics" eyebrow="Runtime">
          <MetricRows rows={data.aiMetrics} />
        </Panel>
        <Panel title="Configuration" eyebrow="LLM">
          <FieldGrid
            fields={[
              "LLM Provider",
              "Temperature",
              "Max Tokens",
              "Prompt Templates",
              "Rate Limits",
            ]}
          />
        </Panel>
      </section>
    </>
  );
}

function McpPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="MCP Management"
        title="MCP tools"
        description="Control tool permissions, tool status, usage logs, and agent-facing capabilities."
        syncedAt={syncedAt}
      />
      <ToolRow actions={["Enable Tool", "Disable Tool", "Edit Tool", "View Logs"]} />
      <Panel title="Tool registry" eyebrow="MCP">
        <DataTable
          rows={data.mcpTools}
          columns={[
            { key: "name", label: "Tool Name" },
            { key: "permissions", label: "Permissions" },
            { key: "lastUsed", label: "Last Used" },
            { key: "status", label: "Status", render: (row) => <Badge value={row.status} /> },
          ]}
        />
      </Panel>
    </>
  );
}

function AnalyticsPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Monitoring"
        title="Analytics"
        description="Track business performance, product movement, AI costs, and customer growth."
        syncedAt={syncedAt}
      />
      <section className="mb-4 grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {data.analytics.map((item) => (
          <article
            className="grid min-h-32 gap-2.5 rounded-lg border border-slate-200 bg-white p-4"
            key={item.label}
          >
            <span className="text-sm font-bold text-slate-500">{item.label}</span>
            <strong className="text-3xl font-bold">{item.value}</strong>
            <small className="text-xs text-slate-500">{item.detail}</small>
          </article>
        ))}
      </section>
      <Panel title="Sales trend" eyebrow="Business" wide>
        <RevenueChart values={data.revenue} />
      </Panel>
    </>
  );
}

function AuditPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="Monitoring"
        title="Audit logs"
        description="Record administrator actions across auth, catalog, orders, AI, MCP, and settings."
        syncedAt={syncedAt}
      />
      <ToolRow actions={["Date Filter", "Administrator", "Module", "Severity"]} />
      <Panel title="Audit events" eyebrow="Logs">
        <DataTable
          rows={data.auditLogs}
          columns={[
            { key: "action", label: "Action" },
            { key: "admin", label: "Administrator" },
            { key: "module", label: "Module" },
            { key: "severity", label: "Severity", render: (row) => <Badge value={row.severity} /> },
          ]}
        />
      </Panel>
    </>
  );
}

function SettingsPage({ data, syncedAt }: PageProps) {
  return (
    <>
      <PageHeader
        eyebrow="System"
        title="Settings"
        description="Configure platform identity, auth, AI, MCP, integrations, security, and maintenance."
        syncedAt={syncedAt}
      />
      <section className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {data.settings.map((setting) => (
          <Panel key={setting.section} title={setting.section} eyebrow="Settings">
            <p className="m-0 leading-6 text-slate-700">{setting.value}</p>
          </Panel>
        ))}
      </section>
    </>
  );
}

type PageProps = {
  data: AdminData;
  syncedAt: string;
};

function ToolRow({ actions }: { actions: string[] }) {
  return (
    <div className="mb-4 flex flex-wrap gap-2.5" aria-label="Page actions">
      {actions.map((action) => (
        <button
          className="min-h-10 rounded-lg border border-slate-200 bg-white px-3.5 font-bold text-slate-700 first:border-blue-200 first:bg-blue-50 first:text-blue-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          key={action}
          type="button"
        >
          {action}
        </button>
      ))}
    </div>
  );
}

function EditGrid({ fields }: { fields: string[] }) {
  return (
    <Panel title="Details" eyebrow="Fields">
      <FieldGrid fields={fields} />
    </Panel>
  );
}

function FieldGrid({ fields }: { fields: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-3.5 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {fields.map((field) => (
        <label className="grid gap-2" key={field}>
          <span className="text-xs font-bold text-slate-500">{field}</span>
          <input
            className="min-h-10 w-full rounded-lg border border-slate-200 px-3 text-slate-950"
            placeholder={field}
          />
        </label>
      ))}
    </div>
  );
}

function MetricRows({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-3">
      {rows.map((row) => (
        <div
          className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0"
          key={row.label}
        >
          <span className="text-slate-500">{row.label}</span>
          <strong>{row.value}</strong>
        </div>
      ))}
    </div>
  );
}

function StatusStrip({ values }: { values: string[] }) {
  return (
    <Panel title="Order status flow" eyebrow="Workflow">
      <div className="flex flex-wrap gap-2.5">
        {values.map((value) => (
          <Badge key={value} value={value} />
        ))}
      </div>
    </Panel>
  );
}
