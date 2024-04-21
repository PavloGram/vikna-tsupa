import Hero from '@/app/components/Hero';
import React from 'react'

export const metadata = {
    title: "Металопластикові Двері",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням металопластикових дверей всіх форм розмірів та кольорів. ",
  };

function page() {
  return (
    <Hero name={"Металопластикові Двері"}/>
  )
}

export default page