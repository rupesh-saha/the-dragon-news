import Link from 'next/link';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightSection = () => {
  return (
    <div className="w-full max-w-sm bg-white">

      <div className="flex flex-col gap-3 mb-8">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-blue-500 rounded-md text-blue-600 font-medium hover:bg-blue-50 transition-colors cursor-pointer">
          <FaGoogle className="text-lg" />
          <span>Login with Google</span>
        </button>

        <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-neutral-800 rounded-md text-neutral-800 font-medium hover:bg-neutral-50 transition-colors cursor-pointer">
          <FaGithub className="text-xl" />
          <span>Login with Github</span>
        </button>
      </div>

      {/* Find Us On Section */}
      <div>
        <h3 className="text-xl font-bold text-neutral-800 mb-4 font-sans">
          Find Us On
        </h3>
        
        
        <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
          
          {/* Facebook */}
          <Link 
            href="https://facebook.com" 
            target="_blank"
            className="flex items-center p-4 hover:bg-neutral-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mr-4 transition-colors group-hover:bg-blue-50">
              <FaFacebookF className="text-[#3b5998] text-lg" />
            </div>
            <span className="font-semibold text-neutral-600 group-hover:text-neutral-900 transition-colors">
              Facebook
            </span>
          </Link>

          {/* Twitter */}
          <Link 
            href="https://twitter.com" 
            target="_blank"
            className="flex items-center p-4 hover:bg-neutral-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mr-4 transition-colors group-hover:bg-sky-50">
              <FaTwitter className="text-[#1da1f2] text-lg" />
            </div>
            <span className="font-semibold text-neutral-600 group-hover:text-neutral-900 transition-colors">
              Twitter
            </span>
          </Link>

          {/* Instagram */}
          <Link 
            href="https://instagram.com" 
            target="_blank"
            className="flex items-center p-4 hover:bg-neutral-50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mr-4 transition-colors group-hover:bg-pink-50">
              <FaInstagram className="text-[#e1306c] text-lg" />
            </div>
            <span className="font-semibold text-neutral-600 group-hover:text-neutral-900 transition-colors">
              Instagram
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default RightSection;