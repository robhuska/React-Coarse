'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './NavLink.module.css';

export default function NavLink({ children, href }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes['nav-link']} ${classes.active}`
          : classes['nav-link']
      }
    >
      {children}
    </Link>
  );
}
