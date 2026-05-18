import { newsPageCategory } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = async() => {
  const newsCategory = await newsPageCategory('01');

  return (
    <div className="flex gap-3 p-2.5 bg-[#f2f2f2] max-w-[93%] md:max-w-[90%] mx-auto my-2">
      <p className="font-medium px-2 py-2  text-amber-50 bg-[#D72050]">Latest</p>
      <Marquee pauseOnHover={true} speed={110} gradientWidth={500}>
        {
          newsCategory.map(n => <Link key={n._id} href={`/news/${n._id}`} className="mr-16 font-medium text-neutral-800 hover:text-red-600">{n.title}</Link>)
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;