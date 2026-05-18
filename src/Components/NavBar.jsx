import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <div className="navbar max-w-[93%] md:max-w-[90%] mx-auto mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 gap-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/about-us'}>About</NavLink>
            <NavLink href={'/career'}>Career</NavLink>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink href={'/'}>Home</NavLink>
          <NavLink href={'/about-us'}>About</NavLink>
          <NavLink href={'/career'}>Career</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <Image src={avatar} alt='avatar' width={45} height={42} />
        <Link href={"/login"} className="text-amber-50 bg-[#403e3e] font-medium py-2 px-3">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;