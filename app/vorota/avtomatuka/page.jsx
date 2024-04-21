import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Автоматика",
    description:
      "Компанія Вікконний майстер займається продажем автоматики для воріт всіх типів. ",
  };


function page() {
  return (
    <Hero name={"Автоматика"}/>
  )
}

export default page