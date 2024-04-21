import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Фурнітура",
    description:
      "Компанія Вікконний майстер займається продажем та віконної та дверної фурнітури. ",
  };


function page() {
  return (
    <Hero name={"Фурнітура"}/>
  )
}

export default page