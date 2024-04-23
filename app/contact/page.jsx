import mario from "../../public/Mario.webp"
import window from "../../public/okno.png"
import rolet from "../../public/zashitnie.png"
import React from 'react'
import { libre } from '../ui/fonts'
import Image from 'next/image'

function page() {
  return (
    <div className='contact-wrap'>
      <p className={`con-title ${libre.className}`}>Віконний майстер</p>
      <Image src={mario} alt="tb" className="con-img"/>
      <Image src={window} alt="tb" className="con-window"/>
      <Image src={rolet} alt="tb" className="con-rolet"/>
    </div>
  )
}

export default page