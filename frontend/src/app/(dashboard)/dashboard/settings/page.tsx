export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Settings */}
        <div className="rounded-lg border bg-white p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium">Profile Settings</h3>
            <p className="text-sm text-gray-500">Manage your account settings and preferences.</p>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex justify-end">
              <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="rounded-lg border bg-white p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium">Advanced Settings</h3>
            <p className="text-sm text-gray-500">Customize your experience.</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-gray-500">Enable dark mode for better visibility.</p>
              </div>
              <button
                role="checkbox"
                aria-checked="false"
                className="relative h-6 w-11 rounded-full bg-gray-300 transition-colors"
              >
                <span className="block h-5 w-5 rounded-full bg-white transition-transform" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Enable Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add an extra layer of security.</p>
              </div>
              <button className="rounded-md border bg-white px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                Enable 2FA
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notification Preferences</p>
                <p className="text-sm text-gray-500">Choose how you receive notifications.</p>
              </div>
              <button className="rounded-md border bg-white px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                Manage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}