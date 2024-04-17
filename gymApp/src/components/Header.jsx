import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <div className=' my-10 z-[99]' id='header'>
        <div className=' p-6'>
             <TypeAnimation
                sequence={[
                    'Witaj ponownie !',
                ]}
                wrapper="span"
                speed={50}
                className=' text-5xl font-[600]'
                cursor={false}
                />
        </div>

       <div className=' w-[90%] mx-auto bg-[#fff] rounded-3xl p-6'>
          <h1 className=' text-2xl font-[200]'>Co chcesz dzisiaj zrobić ?</h1>
          <div className='grid grid-cols-2 gap-7 mt-5'>
              <div className='w-full h-full rounded-3xl bg-[#090909] row-span-2 aspect-square'></div>
              <div className='w-full h-full rounded-3xl bg-[#7a3d17]'></div>
              <div className='w-full h-full rounded-3xl bg-[#e2e2e2]'></div>
          </div>
       </div>
    </div>
  )
}

export default Header