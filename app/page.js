// /app/page.js or /pages/index.js
import Link from 'next/link';

const RootPage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2" passHref>
          <a>Week 2 Assignment</a>
        </Link>
      </p>
    </div>
  );
};

export default RootPage;
