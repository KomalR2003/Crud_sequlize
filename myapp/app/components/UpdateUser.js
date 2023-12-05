
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';



export default function UpdateUser({id, name, age, city}) {

  const [newName, setNewName] = useState(name);
  const [newAge, setNewAge] = useState(age);
  const [newCity, setNewCity] = useState(city);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`http://localhost:3000/api/user/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name: newName, age: newAge, city: newCity }),
        });

        if(!response.ok) {
          throw new Error('failed to update user...');
      }
      console.log('User updated successfully.');
      router.refresh();
      router.push('/');

    } catch (error) {
      console.log(error);
    }
  } 

  
  return(
    <>
        <h1 className='text-3xl font-bold mx-4 my-3'>Update User</h1>

     <form onSubmit={handleSubmit}>


  <input
    className='border border-black border-1 p-2 mx-5 my-2'
    type='text'
    placeholder='Enter name'
    value={newName}
    onChange={(e) => setNewName(e.target.value)}
  />
  <br />

  <input
  className='border border-black border-1 p-2 mx-5 my-2'
    type='text'
    placeholder='Enter age'
    value={newAge}
    onChange={(e) => setNewAge(e.target.value)}
  />
  <br />

  <input
  className='border border-black border-1 p-2 mx-5 my-2'
    type='text'
    placeholder='Enter city'
    value={newCity}
    onChange={(e) => setNewCity(e.target.value)}
  />
  <br />

  <button 
  className='bg-blue-600 rounded px-4 py-2 m-4 text-white'
  type='submit' >Update</button>
  

</form>
   
    </>
  )
}