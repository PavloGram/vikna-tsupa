import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Ролети на Вікна",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням ролет для вікон. ",
  };


function page() {
  return (
    <Hero name={"Ролети на Вікна"}/>
  )
}

export default page