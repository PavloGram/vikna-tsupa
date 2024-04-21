import Hero from '@/app/components/Hero';
import React from 'react'

export const metadata = {
    title: "Технічні Двері",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням технічних дверей. ",
  };


function page() {
  return (
   <Hero name={"Технічні Двері"}/>
  )
}

export default page