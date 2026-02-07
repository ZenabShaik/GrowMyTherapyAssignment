import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import About from "./components/About";
import Approach from "./components/Approach";
import Faq from "./components/Faq";
import CTA from "./components/CTA";
import Background from "./components/Background";

import OurOffice from "./components/OurOffice";


export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <About />
      <Approach />
      <OurOffice />
      <Faq />
      <Background />
      <CTA />  
      
      
  
    </main>
  );
}
