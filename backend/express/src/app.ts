import cors from "cors";
import express from "express";
import helmet from "helmet";

const adminData = {
  stats: [
    { label: "Total Revenue", value: "$128.4K", note: "+12.8% this month" },
    { label: "Total Orders", value: "1,482", note: "86 pending review" },
    { label: "Total Products", value: "624", note: "42 low stock" },
    { label: "AI Requests Today", value: "18,920", note: "99.2% success" },
  ],
  revenue: [52, 68, 46, 78, 64, 88, 72, 94],
  activities: [
    { event: "Order #SW-1048 moved to processing", owner: "Maya Chen", time: "5 min ago" },
    {
      event: "Inventory updated for Urban Trek Backpack",
      owner: "Inventory Bot",
      time: "18 min ago",
    },
    { event: "MCP tool search_products executed", owner: "Agent Runtime", time: "24 min ago" },
    { event: "AI configuration reviewed", owner: "Super Admin", time: "1 hr ago" },
  ],
  products: [
    {
      name: "Urban Trek Backpack",
      sku: "BAG-4821",
      category: "Bags",
      price: "$84.00",
      stock: 18,
      status: "Low stock",
    },
    {
      name: "Noise Shield Headphones",
      sku: "AUD-1140",
      category: "Electronics",
      price: "$129.00",
      stock: 84,
      status: "Active",
    },
    {
      name: "Everyday Ceramic Bottle",
      sku: "HOM-9202",
      category: "Home",
      price: "$32.00",
      stock: 0,
      status: "Out of stock",
    },
  ],
  categories: [
    { name: "Electronics", products: 184, parent: "Catalog", status: "Active" },
    { name: "Bags", products: 52, parent: "Accessories", status: "Active" },
    { name: "Home", products: 91, parent: "Catalog", status: "Active" },
  ],
  inventory: [
    {
      product: "Urban Trek Backpack",
      current: 18,
      reserved: 6,
      warehouse: "North",
      updated: "Today",
    },
    {
      product: "Noise Shield Headphones",
      current: 84,
      reserved: 12,
      warehouse: "West",
      updated: "Today",
    },
    {
      product: "Everyday Ceramic Bottle",
      current: 0,
      reserved: 0,
      warehouse: "South",
      updated: "Yesterday",
    },
  ],
  orders: [
    {
      id: "SW-1048",
      customer: "Aarav Sharma",
      total: "$164.00",
      payment: "Paid",
      status: "Processing",
    },
    {
      id: "SW-1047",
      customer: "Nina Patel",
      total: "$32.00",
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: "SW-1046",
      customer: "Liam Walker",
      total: "$129.00",
      payment: "Pending",
      status: "Pending",
    },
  ],
  reviews: [
    {
      product: "Noise Shield Headphones",
      rating: "5/5",
      customer: "Nina Patel",
      status: "Approved",
    },
    { product: "Urban Trek Backpack", rating: "4/5", customer: "Aarav Sharma", status: "Pending" },
    {
      product: "Everyday Ceramic Bottle",
      rating: "2/5",
      customer: "Liam Walker",
      status: "Reported",
    },
  ],
  customers: [
    { name: "Aarav Sharma", email: "aarav@example.com", orders: 8, status: "Active" },
    { name: "Nina Patel", email: "nina@example.com", orders: 14, status: "Active" },
    { name: "Liam Walker", email: "liam@example.com", orders: 2, status: "Watchlist" },
  ],
  admins: [
    { name: "Maya Chen", email: "maya@agentica.dev", role: "Super Admin", status: "Active" },
    { name: "Noah Smith", email: "noah@agentica.dev", role: "Admin", status: "Active" },
    { name: "Sara Lee", email: "sara@agentica.dev", role: "Admin", status: "Suspended" },
  ],
  aiMetrics: [
    { label: "Successful responses", value: "99.2%" },
    { label: "Average response time", value: "820ms" },
    { label: "Token usage", value: "4.8M" },
    { label: "Estimated cost", value: "$312" },
  ],
  mcpTools: [
    {
      name: "search_products",
      status: "Enabled",
      permissions: "Catalog read",
      lastUsed: "2 min ago",
    },
    { name: "create_order", status: "Enabled", permissions: "Order write", lastUsed: "12 min ago" },
    { name: "track_order", status: "Enabled", permissions: "Order read", lastUsed: "31 min ago" },
    {
      name: "recommend_products",
      status: "Disabled",
      permissions: "AI read",
      lastUsed: "Yesterday",
    },
  ],
  analytics: [
    { label: "Customer Growth", value: "+18%", detail: "312 new customers" },
    { label: "Best Seller", value: "Headphones", detail: "284 units sold" },
    { label: "Order Conversion", value: "6.8%", detail: "+0.9% weekly" },
  ],
  auditLogs: [
    { action: "Administrator Login", admin: "Maya Chen", module: "Auth", severity: "Info" },
    { action: "Product Updated", admin: "Noah Smith", module: "Catalog", severity: "Info" },
    { action: "AI Configuration Changed", admin: "Maya Chen", module: "AI", severity: "Warning" },
  ],
  settings: [
    { section: "General", value: "USD, Asia/Kathmandu, English" },
    { section: "Authentication", value: "JWT, 30 min session, 2FA ready" },
    { section: "Integrations", value: "OpenAI, Gemini, Email, Payment" },
    { section: "Security", value: "API keys, origins, environment variables" },
  ],
};

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
    }),
  );
  app.use(express.json());

  app.get("/health", (_request, response) => {
    response.json({
      status: "ok",
      service: "agentica-express",
    });
  });

  app.get("/admin/overview", (_request, response) => {
    response.json({
      generatedAt: new Date().toISOString(),
      ...adminData,
    });
  });

  return app;
}
