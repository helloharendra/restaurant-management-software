import {
  BarChart3, BookOpen, CalendarClock, ChefHat, LayoutDashboard, LayoutGrid, Package, QrCode, Receipt, Settings, Users, UtensilsCrossed,
} from 'lucide-react'

export const app = {
  name: 'TableTap',
  tagline: 'Restaurant Management',
  logo: UtensilsCrossed,
  user: { name: 'Chef Vikas Khanna', role: 'Manager · Spice Route' },
  searchPlaceholder: 'Search orders, tables, dishes…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Service',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Tables', to: '/tables', icon: LayoutGrid },
      { label: 'Kitchen Display', to: '/kitchen', icon: ChefHat, badge: '5' },
    ],
  },
  {
    title: 'Restaurant',
    items: [
      { label: 'Billing & KOT', icon: Receipt },
      { label: 'Menu Management', icon: BookOpen },
      { label: 'QR Table Ordering', icon: QrCode },
      { label: 'Reservations', icon: CalendarClock },
      { label: 'Inventory & Recipes', icon: Package },
    ],
  },
  {
    title: 'Admin',
    items: [
      { label: 'Staff & Shifts', icon: Users },
      { label: 'Sales Reports', icon: BarChart3 },
      { label: 'Settings', icon: Settings },
    ],
  },
]
