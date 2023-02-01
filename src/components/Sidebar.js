export function Sidebar() {
  return (
    <aside className="w-1/5 p-6 dark:bg-gray-900 dark:text-gray-100">
      <nav className="space-y-8 text-sm">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
            Getting Started
          </h2>
          <div className="flex flex-col space-y-1">
            <a rel="noopener noreferrer" href="#">
              Installation
            </a>
            <a rel="noopener noreferrer" href="#">
              Plugins
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
            Dashboard
          </h2>
          <div className="flex flex-col space-y-1">
            <a rel="noopener noreferrer" href="#">
              Header
            </a>
            <a rel="noopener noreferrer" href="#">
              Drawer
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
            Pages
          </h2>
          <div className="flex flex-col space-y-1">
            <a rel="noopener noreferrer" href="#">
              Homepage
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
            Misc
          </h2>
          <div className="flex flex-col space-y-1">
            <a rel="noopener noreferrer" href="#">
              Tutorials
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
}
