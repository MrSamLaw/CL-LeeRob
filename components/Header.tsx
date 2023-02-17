import Link from 'next/link';

export default function Header() {
  return (
    <header className="mt-2 mb-5">
      <div className="flex justify-between items-center max-w-3xl mx-auto px-5">
        <p className="text-2xl font-extrabold">
          <Link href="/">CHONGLAND</Link>
        </p>
        <nav>
          <Link href="/" className="text-blue-600 hover:text-blue-400">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
