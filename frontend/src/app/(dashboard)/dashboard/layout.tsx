// app/(dashboard)/layout.tsx
import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}