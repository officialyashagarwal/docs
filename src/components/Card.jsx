import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


function Card() {
  return (
    <div className='relative w-52 h-60 rounded-[20px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full py-3 px-8 left-0 '>
            <div className='flex item-center justify-between'>
                <h5>0.4Mb</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>        
                

                <FaDownload size=".6em" colour='#fff'/>
                </span>

            </div>
        </div>
        

    </div>

  )
}

export default Card
