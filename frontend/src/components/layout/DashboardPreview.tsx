import React from 'react';
import { LineChart, BarChart, Activity, Users } from 'lucide-react';
import EnhancedLineChart from '../ui/EnhancedLineChart';

const DashboardPreview = () => {
  return (
    <div className="relative mx-auto max-w-4xl p-4 bg-white rounded-lg shadow-xl">
      <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden">
        {/* Top Navigation */}
        <div className="h-12 bg-white border-b px-4 flex items-center gap-4">
          <div className="w-32 h-4 bg-blue-100 rounded animate-pulse" />
          <div className="w-24 h-4 bg-gray-100 rounded animate-pulse" />
        </div>

        <div className="grid grid-cols-12 gap-4 p-4">
          {/* Sidebar */}
          <div className="col-span-2 space-y-4">
            <div className="h-8 w-full bg-blue-500/10 rounded flex items-center px-2 gap-2">
              <Activity className="h-4 w-4 text-blue-500" />
              <div className="h-3 w-12 bg-blue-500/20 rounded" />
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-8 w-full bg-gray-100 rounded flex items-center px-2 gap-2">
                <div className="h-3 w-3 bg-gray-200 rounded" />
                <div className="h-3 w-16 bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="col-span-10 space-y-4">
            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
                      <div className="h-6 w-16 bg-blue-100 rounded animate-pulse" />
                    </div>
                    {i === 0 && <Users className="h-5 w-5 text-blue-500" />}
                    {i === 1 && <Activity className="h-5 w-5 text-green-500" />}
                    {i === 2 && <LineChart className="h-5 w-5 text-purple-500" />}
                    {i === 3 && <BarChart className="h-5 w-5 text-orange-500" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Line Chart */}
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <EnhancedLineChart />
              </div>

              {/* Bar Chart */}
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="h-4 w-32 bg-gray-100 rounded mb-4" />
                <div className="h-[200px] flex items-end justify-around gap-2">
                  {[40, 70, 50, 90, 60, 80].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-blue-500/20 rounded-t animate-rise"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Board Preview */}
            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="h-4 w-40 bg-gray-100 rounded" />
                <div className="flex gap-2">
                  <div className="h-8 w-8 bg-blue-100 rounded animate-pulse" />
                  <div className="h-8 w-8 bg-gray-100 rounded animate-pulse" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div className="h-4 w-20 bg-gray-100 rounded" />
                    {[...Array(2)].map((_, j) => (
                      <div
                        key={j}
                        className="p-3 bg-gray-50 rounded-lg border animate-slideIn"
                        style={{ animationDelay: `${(i * 2 + j) * 0.1}s` }}
                      >
                        <div className="space-y-2">
                          <div className="h-3 w-full bg-gray-100 rounded" />
                          <div className="h-3 w-2/3 bg-gray-100 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes rise {
          from {
            height: 0;
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease-out forwards infinite;
        }
        
        .animate-rise {
          animation: rise 1s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DashboardPreview;