import Link from 'next/link';
import React from 'react'

export const Navbar: React.FC = ({ }) => {
  return (<nav className='border-b pb-2'>
    <ul className='flex gap-20 '>
      <li>
        <Link href="/"
          className='text-orange-800 hover:underline'>
          Home
        </Link>
      </li>
      <li>
        <Link href="/reviews"
          className='text-orange-800 hover:underline'>
          Reviews
        </Link>
      </li>
      <li>
        <Link href="/" prefetch={false}
          className='text-orange-800 hover:underline'>
          About
        </Link>
      </li>
    </ul>
  </nav>);
}

export default Navbar;