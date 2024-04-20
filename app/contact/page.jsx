import mario from "../../public/Mario.webp"
import React from 'react'
import { libre } from '../ui/fonts'
import Image from 'next/image'

function page() {
  return (
    <div className='contact-wrap'>
      <p className={`con-title ${libre.className}`}>Віконний майстер</p>
      <Image src={mario} alt="tb" className="con-img"/>
    </div>
  )
}

export default page