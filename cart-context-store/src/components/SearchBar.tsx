import { useState, type ChangeEvent, useEffect } from "react";
import { useProduct, useSearchedProduct } from "../contexts/ProductContext";

export function SearchBar() {
  const [input, setInput] = useState<string>('');
  const {products} = useProduct();
  const {setSearchedProducts} = useSearchedProduct();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if(products && input.trim() !== '') {
      timeoutId = setTimeout(() => {
        const existedProducts = products.filter((product) => {
          return (
            product.category.toLowerCase().includes(input.toLowerCase().trim()) ||
            product.name.toLowerCase().includes(input.toLowerCase().trim())
          );
        });

        setSearchedProducts(existedProducts.length > 0 ? existedProducts : 'notFound')
      }, 670)

    } else if(input.trim() === '') {
      setSearchedProducts(undefined);
    }

    return () => {
      clearTimeout(timeoutId);
    }
  }, [input, products, setSearchedProducts])

  return (
    <section className="pt-28 pb-10 m-auto sticky top-0 bg-bg-light/50 dark:bg-bg-dark/50 backdrop-blur-sm">
      <div className="relative w-4xl m-auto shadow-lg">
        <img src="search-icon-light.png" className="absolute size-6 left-2 top-1/2 -translate-y-1/2" />
        <input placeholder="Search" 
          className="
            block bg-details-light dark:bg-main-dark 
            placeholder:text-bg-light rounded-lg py-2 w-full px-9 focus:outline-1 
            focus:outline-main-light dark:focus:outline-bg-dark focus:border-none
          "
          onChange={(event) => {onChange(event)}}
          value={input}
         />
      </div>
    </section>
  )
}