"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'

const page = () => {

  const [marks, setMarks] = useState(80)
  const [user, setUser] = useState("Surendra")


  return (
    <>
    <Header user={user}/>
      <div>
      <h1 className='font-bold  text-6xl text-orange-500' >my name is {user}</h1>
      <h1 className='font-bold text-3xl text-red-400 ' >my total marks is {marks}</h1>
        <button 
        onClick={()=>{
          setMarks(33)
        }}
        className='bg-gray-400 px-5 py-2 rounded mt-8 text-white font-bold ' >Update</button>
      </div>
    </>
  )
}

export default page