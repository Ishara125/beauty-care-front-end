export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">MyStore</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-200 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Products</a>
          <a href="#" className="hover:text-blue-200 transition-colors">About</a>
          <a href="#" className="hover:text-blue-200 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}