import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex space-x-6">
      <Link href="/pricing" className="text-gray-700 hover:text-blue-600">
        Pricing
      </Link>
      <Link href="/features" className="text-gray-700 hover:text-blue-600">
        Features
      </Link>
      <Link href="/capabilities" className="text-gray-700 hover:text-blue-600">
        Capabilities
      </Link>
      <Link href="/faq" className="text-gray-700 hover:text-blue-600">
        FAQ
      </Link>
    </nav>
  );
}