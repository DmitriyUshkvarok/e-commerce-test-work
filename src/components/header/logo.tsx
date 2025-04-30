import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center"
    >
      <Image
        src="/next.svg"
        width={300}
        height={200}
        alt="logo"
        className="w-[70px] h-[30px] object-contain fill-amber-50"
      />
    </Link>
  );
};

export default Logo;
