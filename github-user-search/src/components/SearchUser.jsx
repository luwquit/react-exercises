import axios from 'axios';
import { useEffect, useState } from 'react';

export function SearchUser() {
  const [userName, setUserName] = useState();
  const [status, setStatus] = useState();
  const [name, setName] = useState();

  useEffect(() => {
    let timeoutId;
    if (!userName) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus('Loading')
    timeoutId = setTimeout(async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${userName}`);
        setStatus('Success');

        let username = res.data.name;
        if (username === null) {
          username = 'Unknown'
        };
        setName(username);

      } catch (error) {
        setStatus(error.response?.data?.message)
      }
    }, 500);
    
    return () => {
      clearTimeout(timeoutId);
      setStatus('');
      setName('');
    };
  }, [userName])

  useEffect(() => {
    if(!name) {
      document.title = 'GitHub User Search'
    } else if (name === 'Unknown') {
      document.title = 'User'
    } else {
      document.title = name
    }
  }, [name])

  const setInput = (event) => {
    setUserName((event.target.value).trim())
  }

  return (
    <div className="space-y-5 text-center pt-10">
      <h1 className="text-4xl font-bold">Find GitHub User</h1>
      <input type="text" placeholder="Username"
        onChange={setInput}
        className="border-slate-50 border-solid border rounded-sm py-1 px-2 w-sm" 
      />
      <p>{status && `Status: ${status}`}</p>
      <p>{name && `User Name: ${name}`}</p>
    </div>
  )
}
