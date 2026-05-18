import Header from '@/Components/Header';
import Link from 'next/link';

export default function NotFound() {
  // Dynamically matches the newspaper's daily date format
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white text-neutral-800 p-4 md:p-8 flex flex-col items-center justify-between select-none">
      
      <Header/>

      <main className="my-auto max-w-xl text-center py-16 px-6 border border-neutral-200 rounded shadow-sm bg-neutral-50/40 my-8">
        {/* Red label block matching the 'Latest' tag badge */}
        <span className="bg-[#E21B1B] text-white text-[11px] font-bold px-3 py-1 uppercase tracking-widest">
          Build Error / 404
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl font-extrabold mt-6 mb-4 text-neutral-950 leading-tight">
          Page Missing From Our Digital Archives
        </h2>
        
        {/* Newspaper Column Divider Line */}
        <div className="w-20 h-[3px] bg-neutral-950 mx-auto mb-6"></div>
        
        <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8 font-normal">
          The headline, report, or category segment you are attempting to view might have been retracted, renamed, or does not exist in this print run. 
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-center bg-[#E21B1B] hover:bg-red-700 text-white font-bold text-xs md:text-sm px-6 py-3 transition-colors duration-150 uppercase tracking-wider"
        >
          &larr; Back to homepage
        </Link>
      </main>

      
      <footer className="w-full max-w-5xl border-t border-neutral-300 pt-4 text-center text-[11px] text-neutral-500 uppercase tracking-wider font-medium">
        &copy; {new Date().getFullYear()} The Dragon News. All rights reserved.
      </footer>
    </div>
  );
}