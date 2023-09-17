import Link from 'next/link';
import React from 'react'

export const Navbar: React.FC = ({ }) => {
  return (<nav className='border-b pb-2'>
    <ul className='flex gap-20'>
      <li>
        <Link href="/"
          className='font-bold text-orange-800 hover:underline font-orbitron'>
          Indie Gamer
        </Link>
      </li>
      <li className='ml-auto'>
        <Link href="/reviews"
          className='text-orange-800 hover:underline font-orbitron'>
          Reviews
        </Link>
      </li>
      <li>
        <Link href="/" prefetch={false}
          className='text-orange-800 hover:underline font-orbitron'>
          About
        </Link>
      </li>
    </ul>
  </nav>);
}

export default Navbar;