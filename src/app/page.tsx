import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import { Feedback } from "@/components/Feedback";
import { Hero } from "@/components/Hero";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <Services />
      <Work />
      <Feedback />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
