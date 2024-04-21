import Hero from '@/app/components/Hero';
import React from 'react'

export const metadata = {
    title: "Міжкімнатні Двері",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням міжкімнатних дверей всіх форм розмірів та кольорів. ",
  };


function page() {
  return (
    <Hero name={"Міжкімнатні Двері"}/>
  )
}

export default page