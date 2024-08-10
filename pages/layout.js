export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white ">
      {/* Navbar */}
      <nav className="navbar fixed bg-base-100 shadow-md shadow-gray-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">Item 1</a>
              </li>
              <li>
                <a href="#">Parent</a>
                <ul className="p-2">
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#">Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Item 3</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn btn-ghost text-xl">
            Deen-e-Schedule
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a href="#">Submenu 1</a>
                  </li>
                  <li>
                    <a href="#">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="#" className="btn">
            Button
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow mt-16 overflow-auto bg-gray-800 p-6">
        <div className="max-w-screen-2xl mx-auto">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-base-100  p-4 shadow-md shadow-gray-800">
        <div className="max-w-screen-2xl mx-auto">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
