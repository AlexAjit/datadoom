import { StatCard } from '@/types';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  data: StatCard;
  className?: string;
}

export default function MetricsCard({ data, className }: MetricsCardProps) {
  const { name, value, icon: Icon, change, trend } = data;

  return (
    <div className={cn("rounded-lg border bg-white p-6", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-600">{name}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        <div className="rounded-full bg-gray-100 p-3">
          <Icon className="h-5 w-5 text-gray-600" />
        </div>
      </div>
      <div className="mt-4">
        <span className={cn(
          "text-sm font-medium",
          trend === 'up' ? "text-green-600" : "text-red-600"
        )}>
          {change}
        </span>
      </div>
    </div>
  );
}