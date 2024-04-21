import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Відкатні Ворота",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням відкатних воріт. ",
  };


function page() {
  return (
    <Hero name={"Відкатні Ворота"}/>
  )
}

export default page