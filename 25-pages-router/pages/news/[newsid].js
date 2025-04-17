import { useRouter } from 'next/router';

function NewsDetailPage() {
  const router = useRouter();

  const newsId = router.query.newsid;

  return (
    <>
      <h1>The News Detail Page</h1>
    </>
  );
}

export default NewsDetailPage;