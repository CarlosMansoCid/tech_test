import React from 'react'

const ImageM = () => {
  return (
      <div className='w-[50%] animate-fade duration-400 my-0 mx-auto my-[1rem] p-3 max-md:w-[100%]'>
        <div className='w-[25rem] h-[25rem] mx-auto grid column-3 gap-[10px] max-lg:w-[20rem] max-lg:h-[20rem] 
        max-sm:w-[18rem] max-sm:h-[18rem]   '>
          <div className="shadow-img1 bg-fixed bg-[url('/img/woman.webp')] bg-cover rounded-[10px] row-start-1 row-end-3  "></div>
          <div className="shadow-card bg-fixed bg-[url('/img/woman.webp')] bg-cover rounded-[10px] row-start-1 row-end-2 col-start-2 col-end-4 "></div>
          <div className="shadow-card bg-fixed bg-[url('/img/woman.webp')] bg-cover rounded-[10px] row-start-3 row-end-4 col-start-1 col-end-3 "></div>
          <div className="shadow-img2 bg-fixed bg-[url('/img/woman.webp')] bg-cover rounded-[10px] col-start-3 col-end-4 row-start-2 row-end-4 "></div> 
          <div className="shadow-card bg-fixed bg-[url('/img/woman.webp')] bg-cover rounded-[10px] "></div> 
        </div>
      </div>




  )
}

export default ImageM