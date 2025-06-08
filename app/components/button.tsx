import Link from 'next/link';



type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ButtonLink({ href, children, className = '' }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`px-6 py-3 rounded-full w-300 hover:rounded-full transition-all ${className}`}
    >
      {children}
    </Link>
  );
}
