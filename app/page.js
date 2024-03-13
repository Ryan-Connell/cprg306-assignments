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
      <p>
        <Link href="/week-3" passHref>
          <a>Week 3 Assignment</a>
        </Link>
      </p>
      <p>
        <Link href="/week-4" passHref>
          <a>Week 4 Assignment</a>
        </Link>
      </p>
      <p>
        <Link href="/week-5" passHref>
          <a>Week 5 Assignment</a>
        </Link>
      </p>
      <p>
        <Link href="/week-6" passHref>
          <a>Week 6 Assignment</a>
        </Link>
      </p>
      <p>
        <Link href="/week-7" passHref>
          <a>Week 7 Assignment</a>
        </Link>
      </p>
    </div>
  );
};

export default RootPage;



