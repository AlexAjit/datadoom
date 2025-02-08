const activities = [
    {
      id: 1,
      user: 'Ajit Yadav',
      action: 'Uploaded Excel data',
      timestamp: '1 hours ago',
    },
    {
      id: 2,
      user: 'Ranganath Yadav',
      action: 'Updated dashboard settings',
      timestamp: '2 hours ago',
    },
    {
      id: 3,
      user: 'Rangajit Avala',
      action: 'Added new file',
      timestamp: '1 hours ago',
    },
    {
      id: 4,
      user: 'Shreenath Avala',
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