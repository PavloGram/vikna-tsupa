import Hero from '@/app/components/Hero';
import React from 'react'


export const metadata = {
    title: "Підвіконня",
    description:
      "Компанія Вікконний майстер займається продажем та встановленням підвіконь. ",
  };


function page() {
  return (
    <Hero name={"Підвіконня"}/>
  )
}

export default page