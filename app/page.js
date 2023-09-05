"use client" 
import React, { useState,useEffect   } from 'react'
import axios from 'axios'

const page = () => {

  const [Images, setImages] = useState([])

  useEffect(() => {
    
    GetImages()
  }, [])
  

  const GetImages= async ()=>{


 try {
  
  const response = await axios.get("https://picsum.photos/v2/list")

  const data = response.data
  setImages(data)
  console.log(Images)
 } catch (error) {
  
  console.error("error fetching images")
 }

  }


  return (
    <>
      <div > 
        <button
        onClick={GetImages}
         className='py-3 px-5 bg-green-600 text-white font-bold '>Get Images</button>

        <div className='p-10'>
          {
            Images.map((elem,i)=>{
              return <img 
              key={i}
              src={elem.download_url}

            width={300}
            height={30}
            className='m-10 rounded inline-block '
              />
            })
          }

        </div>
      </div>
    </>
  )
}

export default page