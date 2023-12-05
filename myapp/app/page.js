"use client"
import axios from "axios";
import Link from "next/link";
import React from "react"
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUser] = useState();

  

  useEffect(() => {
   
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user'); 
        // const userData = await response.json();
        const userData = response.data.users;
        console.log(userData);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  //delete user

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setUser((prevUser) => prevUser.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
     <div>
      
      {Array.isArray(users) && users.length > 0 ? (
          <ul className="flex flex-col items-center">
            {users.map((user) => (
              <li className="border border-1 border-black m-2 w-64 items-center justify-center flex flex-col"  key={user.id}>
                <h2 className="text-lg font-bold p-3">Name:{user.name}</h2>
                <p className="px-4 ">City: {user.city}</p>
                <p className="px-4 ">Age: {user.age}</p>
                <div className="flex">
                <button
                 className="bg-red-600 text-white p-2 m-2 rounded"
                 onClick={() => handleDeleteUser(user.id)}>Delete</button>
                
                <Link href={`/update/${user.id}`}><button className="bg-blue-600 text-white p-2 m-2 rounded">Update</button></Link>
                </div>
                
              </li>
              
            ))}
          </ul>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    </>
  )
}


