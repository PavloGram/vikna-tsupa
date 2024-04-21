import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Горизонтальні",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням жалюзів горизонтального типу . ",
  };


function page() {
  return (
    <Hero name={"Горизонтальні"}/>
  )
}

export default page