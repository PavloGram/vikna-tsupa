import Hero from '@/app/components/Hero';
import React from 'react'

export const metadata = {
    title: "Протипожежні Двері",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням протипожежних дверей. ",
  };



function page() {
  return (
    <Hero name={"Протипожежні Двері"}/>
  )
}

export default page