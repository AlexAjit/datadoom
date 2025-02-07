import AreaChart from '@/components/charts/area-chart';
import BarChart from '@/components/charts/bar-chart';
import PieChart from '@/components/charts/pie-chart';

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg border bg-white p-6">
          <h3 className="mb-4 text-sm font-medium">User Growth</h3>
          <div className="h-[300px]">
            <AreaChart />
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <h3 className="mb-4 text-sm font-medium">Revenue Distribution</h3>
          <div className="h-[300px]">
            <PieChart />
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <h3 className="mb-4 text-sm font-medium">Monthly Sales</h3>
          <div className="h-[300px]">
            <BarChart />
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">Detailed Analysis</h2>
        <div className="h-[400px] w-full">
          <BarChart />
        </div>
      </div>
    </div>
  );
}