"use client"


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  const router = useRouter();
  
  const addUser = async () => {
    try {

       const response = await fetch('http://localhost:3000/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, age, city }),

        });
        console.log('response:', await response.json());
        if (!response.ok) {
          throw new Error(`Failed to add user: ${response.status} - ${response.statusText}`);
        }
        console.log("successfully addeed...", name, age, city);
        alert("user added successfully.......");

        setName('');
        setAge('');
        setCity('');
         
        router.refresh();
        router.push('/');
    
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  return (
    <>
      <h1 className='text-3xl font-bold mx-4 my-3'>Create User</h1>

      <form>

        <input
         className='border border-black border-1 p-2 mx-5 my-2'
          type='text'
          placeholder='Enter name'
          value={name}
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value)
          }}
        />
        <br />

        <input
        className='border border-black border-1 p-2 mx-5 my-2'
          type='text'
          placeholder='Enter age'
          value={age}
          onChange={(e) => {
            console.log(e.target.value);
            setAge(e.target.value)
          }}
        />
        <br />

        <input
        className='border border-black border-1 p-2 mx-5 my-2'
          type='text'
          placeholder='Enter city'
          value={city}
          onChange={(e) => {
            console.log(e.target.value);
            setCity(e.target.value)
          }}
        />
        <br />

        <button 
        className='bg-green-600 rounded px-4 py-2 m-4 text-white'
        type='submit'
         onClick={addUser}>Create</button>
        


      </form>
    </>
  )
}

export default page