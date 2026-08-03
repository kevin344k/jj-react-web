import React from 'react'
import Hero from './Hero'
import Section_Libro_jj from './Section_Libro_jj'
import Section_calcualdora from './Section_calcualdora'
import SectionMentoria from './SectionMentoria'
import SectionTestimonial from './SectionTestimonial'
import SectionSalvandoAlumnos from './SectionSalvandoAlumnos'
import SectionAnnounceJob from './SectionAnnounceJob'
import SectionLibros from './SectionLibros'
import SectionCardsMentoria from './SectionCardsMentoria'
import SectionConferencias from './SectionConferencias'
export default function Main() {
  return (
    <div className="">
      <Hero></Hero>
        <Section_Libro_jj></Section_Libro_jj>
          <SectionCardsMentoria />
    
      <Section_calcualdora></Section_calcualdora>
      <SectionMentoria></SectionMentoria>
      <SectionConferencias></SectionConferencias>
      <SectionTestimonial></SectionTestimonial>
      <SectionSalvandoAlumnos />
      <SectionAnnounceJob></SectionAnnounceJob>
      <SectionLibros></SectionLibros>
    </div>
  )
}
