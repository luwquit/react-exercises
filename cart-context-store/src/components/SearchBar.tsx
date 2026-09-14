export function SearchBar() {
  return (
    <section className="pt-28 pb-10 m-auto sticky top-0 bg-bg-light/50 backdrop-blur-sm">
      <div className="relative w-4xl m-auto shadow-lg">
        <img src="search-icon-light.png" className="absolute size-6 left-2 top-1/2 -translate-y-1/2" />
        <input placeholder="Search" className="block bg-details-light placeholder:text-bg-light rounded-lg py-2 w-full px-9 focus:outline-1 focus:outline-main-light focus:border-none" />
      </div>
    </section>
  )
}