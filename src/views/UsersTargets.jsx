import React, { useEffect, useState } from 'react'
import { getUsers } from '../components/Crud/utils/request';
import Cards from '../components/Cards/Cards';

export default function UsersTargets() {
    const [users, setUsers] = useState([]);

    const get_users = async() =>{
        const response = await getUsers();
        setUsers(await response.json());
    }

    useEffect(()=>{
        get_users();
    }, []);

  return (
    <div className='grid gap-6 grid-cols-4'>
        {
            users.length > 0 && users?.map((usrs)=>(
                <Cards name={usrs.name} last_name={usrs.last_name} age={usrs.age} />
            ))
        }
    </div>
  )
}
