import NewsCard from "@/Components/HomePage/NewsCard";
import RightSection from "@/Components/HomePage/RightSection";
import { newsCategories, newsPageCategory } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";



const PageCategoryCard = async ({ params }) => {
  const categories = await newsCategories();
  console.log(categories.news_category);

  const { id } = await params;
  const newsCategory = await newsPageCategory(id);

  return (
    <div className="max-w-[93%] md:max-w-[90%] mx-auto grid grid-cols-12 gap-4">

      <div className="font-bold col-span-12 md:col-span-3">

        <h1 className="font-semibold mb-2">All Category</h1>

        <ul className="flex flex-col gap-1.5">

          {
            categories.news_category.map(category => <li key={category.category_id} className={`font-bold ${id == category.category_id && "bg-[#e8e8e8]"} `}><Link href={`/category/${category.category_id}`} className="block py-3.5 px-8 w-full h-full transition-all">{category.category_name}</Link></li>)
          }

        </ul>


      </div>

      <div className="col-span-12 md:col-span-6">
        <h1 className="font-semibold mb-2">All News</h1>

        {newsCategory && newsCategory.length > 0 ? (
          newsCategory.map((singleNews) => (
            <NewsCard key={singleNews._id} news={singleNews} />
          ))
        ) : (
          <p className="text-neutral-500 text-sm font-medium mt-6 text-center italic">
            No articles found in this category section.
          </p>
        )}

      </div>

      <div className="font-bold col-span-12 md:col-span-3">
        <h1 className="font-semibold mb-2">Login With</h1>

        <RightSection />
      </div>
    </div>
  );
};

export default PageCategoryCard;