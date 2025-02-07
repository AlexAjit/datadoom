import { TrendingUp, Users, DollarSign, ShoppingCart } from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231.89',
    icon: DollarSign,
    change: '+20.1%',
    trend: 'up',
  },
  {
    name: 'Active Users',
    value: '2,338',
    icon: Users,
    change: '+15.1%',
    trend: 'up',
  },
  {
    name: 'Sales',
    value: '12,432',
    icon: ShoppingCart,
    change: '+18.7%',
    trend: 'up',
  },
  {
    name: 'Growth',
    value: '23.1%',
    icon: TrendingUp,
    change: '+4.3%',
    trend: 'up',
  },
];

export default function StatsOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="rounded-lg border bg-white p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.name}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
            <div className="rounded-full bg-gray-100 p-3">
              <stat.icon className="h-5 w-5 text-gray-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className={`text-sm font-medium ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}