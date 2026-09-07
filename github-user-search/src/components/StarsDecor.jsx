export function StarsDecor() {
  return (
    <div>
      <div className="w-60 h-60 lg:w-50 lg:h-50 md:w-30 md:h-30 sm:w-20 sm:h-20 max-xs:w-10 max-xs:h-10 absolute left-10 top-10 bg-contain bg-no-repeat animate-first-star" ></div>
      <div className="w-60 h-60 lg:w-50 lg:h-50 md:w-30 md:h-30 sm:w-20 sm:h-20 max-xs:w-10 max-xs:h-10 absolute right-10 top-10 bg-contain bg-no-repeat animate-second-star"></div>
    </div>
  );
}
