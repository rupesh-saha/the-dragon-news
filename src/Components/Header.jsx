import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className="mx-auto">

      <Image
        src={logo}
        width={500}
        height={250}
        alt='Logo'
        className="mx-auto py-5 w-87.5 sm:w-125 h-auto"
      />

      <p className="font-light mx-auto text-center text-lg">Journalism Without Fear or Favour</p>
      <p className="font-semibold mx-auto text-center text-lg">{format(new Date(), "EEEE, MMM dd, yyyy")}</p>

    </div>
  );
};

export default Header;