// week-2/student-info.js
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <p>Ryan Connell</p>
      <p>
        GitHub Repository:{''}
        <Link href="https://github.com/Ryan-Connell" passHref>
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
