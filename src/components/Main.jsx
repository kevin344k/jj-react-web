import React from 'react'
import Hero from './Hero'
import Section_Libro_jj from './Section_Libro_jj'
import Section_calcualdora from './Section_calcualdora'
import SectionMentoria from './SectionMentoria'
import SectionTestimonial from './SectionTestimonial'
import SectionAnnounceJob from './SectionAnnounceJob'
import SectionLibros from './SectionLibros'
export default function Main() {
  return (
    <div>
      <Hero></Hero>
      <Section_Libro_jj></Section_Libro_jj>
      <Section_calcualdora></Section_calcualdora>
      <SectionMentoria></SectionMentoria>
      <SectionTestimonial></SectionTestimonial>
      <SectionAnnounceJob></SectionAnnounceJob>
      <SectionLibros></SectionLibros>
    </div>
  )
}
