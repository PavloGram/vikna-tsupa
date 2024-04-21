import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Гаражні Ворота",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням гаражних воріт. ",
  };


function page() {
  return (
    <Hero name={"Гаражні Ворота"}/>
  )
}

export default page