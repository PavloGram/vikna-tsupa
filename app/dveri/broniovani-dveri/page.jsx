import Hero from '@/app/components/Hero';
import React from 'react'

export const metadata = {
    title: "Броньовані Двері",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням броньованих дверей всіх форм розмірів та кольорів. ",
  };

function page() {
  return (
    <Hero name={"Броньовані Двері"}/>
  )
}

export default page