import Hero from '@/app/components/Hero';
import React from 'react'

export const metadata = {
    title: "Ремонт Ролет",
    description: "Компанія Вікконний майстер займається ремонтом та обслуговуванням ролет всіх типів. ",
  };


function page() {
  return (
    <>
    <Hero name={"Ремонт та обслуговування ролет"} />
    
    </>
   
  )
}

export default page