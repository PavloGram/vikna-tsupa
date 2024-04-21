import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "День-Ніч",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням жалюзів типу день-ніч. ",
  };


function page() {
  return (
    <Hero name={"День-Ніч"}/>
  )
}

export default page