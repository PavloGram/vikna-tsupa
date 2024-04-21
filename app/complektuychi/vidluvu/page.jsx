import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Відливи",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням відливів. ",
  };


function page() {
  return (
    <Hero name={"Відливи"}/>
  )
}

export default page