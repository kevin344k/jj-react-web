import React from 'react'
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SectionAcercaDe from "../components/SectionAcercaDe";
export default function Home() {
  return (
      <>
         <Navbar></Navbar>
         <Main></Main>
         <SectionAcercaDe></SectionAcercaDe>
         <Footer></Footer>
       </>
  )
}
