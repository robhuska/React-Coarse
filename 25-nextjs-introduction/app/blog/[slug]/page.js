import Link from 'next/link';

export default function BlogPost({ params }) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
      <p>
        <Link href="../blog">Blog</Link>
      </p>
    </main>
  );
}
