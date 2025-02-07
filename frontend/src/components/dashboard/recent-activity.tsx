const activities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'Created a new project',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'Updated dashboard settings',
      timestamp: '4 hours ago',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'Added new team member',
      timestamp: '6 hours ago',
    },
    {
      id: 4,
      user: 'Sarah Williams',
      action: 'Completed task review',
      timestamp: '8 hours ago',
    },
  ];
  
  export default function RecentActivity() {
    return (
      <div className="rounded-lg border bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-medium">{activity.user}</p>
                <p className="text-sm text-gray-600">{activity.action}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }