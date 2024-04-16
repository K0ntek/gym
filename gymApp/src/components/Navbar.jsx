import React from 'react'
import { IoStatsChart, IoAdd} from "react-icons/io5";
import { CgFormatLeft } from "react-icons/cg";
import { GrHomeOption } from "react-icons/gr";
import { Link } from 'react-scroll';

const Navbar = () => {

    const navElements =[
        {
            link: 'header',
            icon: <GrHomeOption/>,
            name: 'strona główna',
        },
        {
            link: 'stats',
            icon: <IoStatsChart/>,
            name: 'statystyki',
        },
        {
            link: 'add',
            icon: <IoAdd/>,
            name: 'dodaj ćwiczenia',
        },
        {
            link: 'script',
            icon: <CgFormatLeft/>,
            name: 'plan treningowy',
        },
    ]

  return (
    <div className=' w-full  text-white sticky top-[5%]'>
        <div className=' mx-auto text-center space-y-[-10px]'>
                <div className=' flex mx-auto text-center w-fit'>
                        <div className='w-6 h-[2px] bg-[#7a3d17] mt-[17px]'></div>  
                    <h1 className=' text-2xl'>GYM</h1>
                        <div className='w-6 h-[2px] bg-[#7a3d17] mt-[17px]'></div>
                </div>

            <h1 className='text-xl text-[#7a3d17]'>TRAINING</h1>

                <div className='flex mx-auto text-center w-fit'>
                    <div className='w-7 h-[1px] bg-[#7a3d17] mt-[12px]'></div>
                <h1>PLANS</h1>
                    <div className='w-7 h-[1px] bg-[#7a3d17] mt-[12px]'></div>
                </div>
        </div>
        {navElements.map((element, i)=>{
            return(
                <Link key={i} to={element.link} smooth={true}>
                    <div className=' text-white font-inter text-xl py-3 ps-3 flex space-x-2 group hover:bg-white/20 group cursor-pointer'>
                        <p className='mt-1 text-[#7a3d17]'>{element.icon}</p>
                        <p className=' group-hover:ml-4 transition-all duration-150'>{element.name}</p>
                    </div>
                </Link>
            )
        })}

        <div className=' flex space-x-3 ps-2 mt-6'>
            <div className=' w-[50px] h-[50px] aspect-square rounded-full bg-white'></div>
           <div className=' h-[50px]'>
             <p className=' text-xl relative top-[50%] translate-y-[-50%]'>User</p>
           </div>
        </div>
    </div>
  )
}

export default Navbar