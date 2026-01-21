import { Pencil } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="mx-auto max-w-7xl border-t border-white/40 px-6 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
              <Pencil className="h-5 w-5 text-gray-100" />
            </div>
            <span className="text-xl text-gray-800">Lettuce Write</span>
          </div>
          <p className="text-sm text-gray-700">
            A collaborative writing app for writers
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-gray-900">Product</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <span className="opacity-50">Features</span>
            </li>
            <li>
              <span className="opacity-50">Pricing</span>
            </li>
            <li>
              <span className="opacity-50">Security</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-gray-900">Company</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <span className="opacity-50">About</span>
            </li>
            <li>
              <span className="opacity-50">Blog</span>
            </li>
            <li>
              <span className="opacity-50">Careers</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-gray-900">Support</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <span className="opacity-50">Help Center</span>
            </li>
            <li>
              <span className="opacity-50">Contact</span>
            </li>
            <li>
              <span className="opacity-50">API Docs</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-white/40 pt-8 text-center text-sm text-gray-700">
        <p>&copy; 2026 Lettuce Write. All rights reserved.</p>
      </div>
    </footer>
  );
}
