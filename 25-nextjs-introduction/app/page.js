import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
    </main>
  );
}
