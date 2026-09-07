import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import { StarsDecor } from './StarsDecor';
import { Input } from './Input';
import formatName from '../utils/formatName';

export function SearchUser() {
  const [searchedUserName, setSearchedUserName] = useState();
  const [status, setStatus] = useState();
  const [name, setName] = useState();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!searchedUserName) return;
    setStatus('Loading')

    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${searchedUserName}`);
        setStatus('Success');

        setName(formatName(res.data.name));
        setData(res.data);

      } catch (error) {
        setStatus(error.response?.data?.message)
      }
    }
    fetchData();
  }, [searchedUserName])

  useEffect(() => {
    if(!name) {
      document.title = 'GitHub User Search'
    } else if (name === 'Unknown') {
      document.title = 'User'
    } else {
      document.title = name
    }
  }, [name])

  return (
    <>
      <StarsDecor />
      <div className="space-y-5 pt-10">
        <h1 className="text-4xl max-xs:text-2xl font-bold">Find GitHub User</h1>
        <Input setSearchedUserName={setSearchedUserName} />
        <p>{status && `Status: ${status}`}</p>
        <UserCard data={data} />
      </div>
    </>
  )
}
