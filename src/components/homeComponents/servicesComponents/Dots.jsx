import React  from 'react'

const Dots = ({ activeIndex, pages}) => {

  const aux = []

  for (let index = 0; index < pages; index++) {
    aux.push(index)
  }

  return (

    <div className=' mx-auto w-[60%] flex items-center justify-center'>
     {
      aux.map((item)=>{
        return(
            <div className='mx-[.3rem] w-[1rem] h-[1rem] rounded-[100%] bg-mediumBlue flex items-center justify-center
                            border-2 border-darkBlue cursor-pointer'>
              <div className={`w-[.3rem] h-[.3rem] rounded-[100%] bg-${activeIndex === item ? 'darkBlue' : 'white'}
                            flex items-center justify-center`}></div>
            </div>
          )
        })
    }
    </div>



        
  )
          
        

      
  
}



export default Dots