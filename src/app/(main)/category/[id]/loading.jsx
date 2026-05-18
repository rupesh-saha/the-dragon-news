
const loading = () => {
  return (
    <div className="w-full border border-neutral-200 rounded-md p-5 bg-white space-y-4 animate-pulse">
      <div className="flex items-center gap-3 border-b border-neutral-100 pb-3">
        <div className="w-10 h-10 rounded-full bg-neutral-200 shrink-0"></div>
        <div className="space-y-2 w-full">
          <div className="h-4 w-1/4 bg-neutral-200 rounded"></div>
          <div className="h-3 w-1/6 bg-neutral-100 rounded"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-5 w-full bg-neutral-200 rounded"></div>
        <div className="h-5 w-4/5 bg-neutral-200 rounded"></div>
      </div>
      <div className="w-full h-48 bg-neutral-200 rounded-lg"></div>
      <div className="space-y-2">
        <div className="h-3 w-full bg-neutral-100 rounded"></div>
        <div className="h-3 w-2/3 bg-neutral-100 rounded"></div>
      </div>
    </div>
  );
};

export default loading;