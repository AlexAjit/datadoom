// import StatsOverview from '@/components/dashboard/stats-overview'
import RecentActivity from '@/components/dashboard/recent-activity'
// import { AreaChart } from '@/components/charts/area-chart'
// import { BarChart } from '@/components/charts/bar-chart'
// import { PieChart } from '@/components/charts/pie-chart'
import AreaChart from '@/components/charts/area-chart'
// import PieChart from '@/components/charts/pie-chart'
import MetricsCard from '@/components/ui/metrics-card'
import { Users, DollarSign, ShoppingCart, Activity } from 'lucide-react'

export default function DashboardPage() {
  return (
    <main className="p-6 space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricsCard 
          data={{
            name: "Total Revenue",
            value: "$45,231.89",
            icon: DollarSign,
            change: "+20.1%",
            trend: "up"
          }}
        />
        <MetricsCard
          data={{
            name: "Active Users",
            value: "2,350",
            icon: Users,
            change: "-4.5%",
            trend: "down"
          }}
        />
        <MetricsCard
          data={{
            name: "Sales",
            value: "12,234",
            icon: ShoppingCart,
            change: "+12.2%",
            trend: "up"
          }}
        />
        <MetricsCard
          data={{
            name: "Active Sessions",
            value: "573",
            icon: Activity,
            change: "+8.4%",
            trend: "up"
          }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <AreaChart />
        </div>
        <div className="lg:col-span-3">
          <RecentActivity />
        </div>
      </div>

      {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <StatsOverview />
        </div>
        <div className="lg:col-span-3">
          <PieChart />
        </div>
      </div> */}
    </main>
  )
}