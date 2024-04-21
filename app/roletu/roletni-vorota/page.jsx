import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Ролетні Ворота",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням ролетних воріт. ",
  };


function page() {
  return (
    <Hero name={"Ролетні Ворота"}/>
  )
}

export default page