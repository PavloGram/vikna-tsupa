import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Москітні сітки",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням москітних сіток. ",
  };


function page() {
  return (
    <Hero name={"Москітні сітки"}/>
  )
}

export default page