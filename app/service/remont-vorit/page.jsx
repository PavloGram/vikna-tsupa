import Hero from '@/app/components/Hero';
import React from 'react'

export const metadata = {
    title: "Ремонт Воріт",
    description: "Компанія Вікконний майстер займається ремонтом та обслуговуванням воріт всіх типів. ",
  };



function page() {
  return (
    <Hero name={"Ремонт Воріт"}/>
  )
}

export default page