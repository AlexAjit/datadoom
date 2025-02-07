import { Database } from "lucide-react";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Database className="h-8 w-8 text-blue-500" />
        <span className="font-bold text-2xl text-white">DashDoom</span>
      </div>
      <Navbar />
    </header>
  );
}