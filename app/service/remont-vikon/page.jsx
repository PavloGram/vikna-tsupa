import Hero from '@/app/components/Hero';
import React from 'react'

export const metadata = {
    title: "Ремонт Вікон",
    description: "Компанія Вікконний майстер займається ремонтом та обслуговуванням вікон всіх типів. ",
  };


function page() {
  return (
    <Hero name={"Ремонт Вікон"}/>
  )
}

export default page