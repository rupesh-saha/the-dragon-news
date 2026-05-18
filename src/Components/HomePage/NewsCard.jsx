import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar, FaRegEye } from "react-icons/fa";
import { FiBookmark, FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    author,
    image_url,
    details,
    rating,
    total_view
  } = news;

  const renderStars = (ratingNum) => {
    const stars = [];
    const floorRating = Math.floor(ratingNum || 0);
    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<FaStar key={i} className="text-orange-400 text-sm" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-neutral-300 text-sm" />);
      }
    }
    return stars;
  };

  return (
    <div className="card bg-white border border-neutral-200 rounded-md p-5 shadow-sm mb-6 select-none text-neutral-800">

      {/* Top Header Row: Author Profiling & Utilities */}
      <div className="flex justify-between items-center bg-neutral-50 -mx-5 -mt-5 p-4 rounded-t-md border-b border-neutral-100">
        <div className="flex items-center gap-3">
          {/* DaisyUI Avatar Container */}
          <div className="avatar">
            <div className="w-10 h-10 rounded-full relative">
              <Image
                src={author.img}
                alt={title}
                width={40} // Add this layout hint
                height={40} // Add this layout hint
              />
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-800 leading-tight">
              {author?.name || "Anonymous Reporter"}
            </h4>
            <p className="text-xs text-neutral-400 font-medium">
              {author?.published_date ? author.published_date.split(" ")[0] : "No Date"}
            </p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2.5 text-neutral-500 text-lg">
          <button className="hover:text-neutral-800 transition-colors cursor-pointer p-1">
            <FiBookmark />
          </button>
          <button className="hover:text-neutral-800 transition-colors cursor-pointer p-1">
            <FiShare2 />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-snug mt-4 mb-3 hover:text-red-600 transition-colors cursor-pointer">
        {title}
      </h2>

      {/* Feature Cover Image */}
      <div className="w-full relative rounded-lg overflow-hidden my-3">
        <Image
          src={image_url}
          alt={title}
          width={800} // Add this layout hint
          height={450}
          className="w-full h-auto max-h-[400px] object-cover"
        />
      </div>

      {/* Description Snippet Block */}
      <div className="text-sm text-neutral-500 leading-relaxed font-normal my-3">
        <p className="line-clamp-4">
          {details}
        </p>
        <Link
          href={`/news/${_id}`}
          className="text-[#E21B1B] font-bold text-xs mt-1 inline-block hover:underline tracking-wide"
        >
          Read More
        </Link>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-neutral-200 my-2"></div>

      {/* Bottom Footer Section: Social metrics */}
      <div className="flex justify-between items-center pt-2">
        {/* Rating Metrics */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {renderStars(rating?.number)}
          </div>
          <span className="text-sm font-bold text-neutral-600 ml-1">
            {rating?.number || "0.0"}
          </span>
        </div>

        {/* View Statistics Counter */}
        <div className="flex items-center gap-2 text-neutral-500 font-medium text-sm">
          <FaRegEye className="text-base text-neutral-400" />
          <span>{total_view || 0}</span>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;