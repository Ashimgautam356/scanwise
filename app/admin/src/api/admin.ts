import { useQuery } from "@tanstack/react-query";

export type AdminData = {
  generatedAt: string;
  stats: Stat[];
  revenue: number[];
  activities: Activity[];
  products: Product[];
  categories: Category[];
  inventory: InventoryItem[];
  orders: Order[];
  reviews: Review[];
  customers: Customer[];
  admins: AdminUser[];
  aiMetrics: Metric[];
  mcpTools: McpTool[];
  analytics: AnalyticsItem[];
  auditLogs: AuditLog[];
  settings: Setting[];
};

export type Stat = { label: string; value: string; note: string };
export type Activity = { event: string; owner: string; time: string };
export type Product = {
  name: string;
  sku: string;
  category: string;
  price: string;
  stock: number;
  status: string;
};
export type Category = { name: string; products: number; parent: string; status: string };
export type InventoryItem = {
  product: string;
  current: number;
  reserved: number;
  warehouse: string;
  updated: string;
};
export type Order = {
  id: string;
  customer: string;
  total: string;
  payment: string;
  status: string;
};
export type Review = { product: string; rating: string; customer: string; status: string };
export type Customer = { name: string; email: string; orders: number; status: string };
export type AdminUser = { name: string; email: string; role: string; status: string };
export type Metric = { label: string; value: string };
export type McpTool = { name: string; status: string; permissions: string; lastUsed: string };
export type AnalyticsItem = { label: string; value: string; detail: string };
export type AuditLog = { action: string; admin: string; module: string; severity: string };
export type Setting = { section: string; value: string };

async function fetchAdminData() {
  const response = await fetch("/api/admin/overview");

  if (!response.ok) {
    throw new Error("Unable to load admin data");
  }

  return (await response.json()) as AdminData;
}

export function useAdminData() {
  return useQuery({
    queryKey: ["admin-overview"],
    queryFn: fetchAdminData,
    staleTime: 30_000,
  });
}
