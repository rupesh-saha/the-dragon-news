import RightSection from '@/Components/HomePage/RightSection';
import { newsDetails } from '@/lib/data';
import React from 'react';
import Image from "next/image";
import Link from "next/link";


export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const detail = await newsDetails(id);

  return {
    title: detail.title,
    description: detail.description,
  }
}

const newsPageDetails = async ({ params }) => {
  const { id } = await params;

  const detail = await newsDetails(id);
  console.log(detail);

  return (
    <div className="grid grid-cols-12 gap-4 max-w-[93%] md:max-w-[90%] mx-auto">

      <div className="w-full bg-white border border-neutral-200 rounded-md p-5 md:p-6 shadow-sm text-neutral-800 select-none col-span-12 md:col-span-9">

        {/* 1. Main Feature Cover Image Container */}
        <div className="w-full relative rounded-lg overflow-hidden mb-5">
          <Image
            src={detail.image_url}
            alt="News article imagery view"
            width={800}
            height={450}
            priority
            className="w-full h-auto max-h-[480px] object-cover"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-950 leading-snug tracking-tight mb-4 font-sans">
          {detail.title}
        </h1>

        <div className="text-neutral-500 text-sm md:text-base leading-relaxed font-normal mb-6 space-y-4 text-justify">
          <p className="whitespace-pre-line">
            {detail.details}
          </p>
        </div>

        <div className="pt-2">
          <Link
            href={`/category/${detail.category_id}`}
            className="inline-flex items-center gap-2 bg-[#E21B1B] hover:bg-red-700 text-white font-semibold text-sm px-5 py-2.5 transition-colors duration-150 rounded"
          >
            <span>&larr;</span>
            <span>All news in this category</span>
          </Link>
        </div>

      </div>

      <div className="col-span-3">
        <RightSection></RightSection>
      </div>

    </div>
  );
};

export default newsPageDetails;