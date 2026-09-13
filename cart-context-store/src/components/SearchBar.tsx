export function SearchBar() {
  return (
    <section className="pt-28 m-auto">
      <div className="relative w-4xl m-auto">
        <img src="search-icon-light.png" className="absolute size-6 left-2 top-1/2 -translate-y-1/2" />
        <input placeholder="Search" className="block bg-details-light placeholder:text-bg-light rounded-lg py-2 w-full px-9 focus:outline-1 focus:outline-main-light focus:border-none" />
      </div>
    </section>
  )
}