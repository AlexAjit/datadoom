import { Bell, Search, Settings, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-64 rounded-md border border-gray-300 pl-8 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="rounded-full hover:bg-gray-100 p-2">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="rounded-full hover:bg-gray-100 p-2">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="h-5 w-5 text-gray-600" />
        </div>
      </div>
    </header>
  )
}