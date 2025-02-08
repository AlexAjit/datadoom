export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium">Personal Information</h3>
            <p className="text-sm text-gray-500">Update your personal details here.</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Profile Photo</label>
              <div className="flex items-center gap-4">
                <span className="h-16 w-16 rounded-full bg-gray-200" />
                <button className="rounded-md border bg-white px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                  Change Photo
                </button>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                defaultValue="Ajit Yadav"
                className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                defaultValue="ajit.yadav@google.com"
                className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Bio</label>
              <textarea
                rows={4}
                className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="A software engineer by skill and passion"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        <div className="rounded-lg border bg-white p-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium">Account Settings</h3>
            <p className="text-sm text-gray-500">Manage your account preferences.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-500">Receive email about your activity.</p>
              </div>
              <button
                role="checkbox"
                aria-checked="true"
                data-state="checked"
                className="relative h-6 w-11 rounded-full bg-black transition-colors"
              >
                <span className="block h-5 w-5 translate-x-5 rounded-full bg-white transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Project Updates</p>
                <p className="text-sm text-gray-500">Receive updates about your projects.</p>
              </div>
              <button
                role="checkbox"
                aria-checked="true"
                data-state="checked"
                className="relative h-6 w-11 rounded-full bg-black transition-colors"
              >
                <span className="block h-5 w-5 translate-x-5 rounded-full bg-white transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}