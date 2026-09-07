import { useEffect, useState } from "react"

export function Input({ setSearchedUserName}) {
  const [input, setInput] = useState('');

  useEffect(() => {
    let timeoutId;
    if (!input) return;
    
    timeoutId = setTimeout(async () => {
      setSearchedUserName(input);
    }, 670);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [input, setSearchedUserName])

  const handleInput = (event) => {
    setInput((event.target.value).trim())
  }

  return (
    <input type="text" placeholder="Username"
      onChange={handleInput}
      value={input}
      className="border-slate-50 border-solid border rounded-sm py-1 px-2 w-sm max-xs:w-xs" 
    />
  )
}