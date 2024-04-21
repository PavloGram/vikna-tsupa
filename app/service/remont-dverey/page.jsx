import Hero from '@/app/components/Hero';
import React from 'react'

export const metadata = {
    title: "Ремонт Дверей",
    description: "Компанія Вікконний майстер займається ремонтом та обслуговуванням дверей всіх типів. ",
  };



function page() {
  return (
    
    <Hero name={"Ремонт дверей"}/>
    
  )
}

export default page