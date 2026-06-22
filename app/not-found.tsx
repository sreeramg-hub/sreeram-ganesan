import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl mb-6 font-mono text-blue-400 font-extrabold">404</div>
      <h1 className="text-2xl font-bold text-slate-100 mb-3">Page not found</h1>
      <p className="text-slate-400 mb-8 max-w-sm">
        Looks like this page went on a DNS journey and never came back.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
      >
        ← Back home
      </Link>
    </div>
  )
}
