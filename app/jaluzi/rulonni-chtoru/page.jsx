import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Рулонні Штори",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням рулонних штор . ",
  };


function page() {
  return (
    <Hero name={"Рулонні Штори"}/>
  )
}

export default page