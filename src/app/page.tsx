import Hero from "@/components/sections/hero/hero";
import ContactForm from "@/components/sections/contact-form";
import ProjectsSection from "@/components/sections/projects/projects-section";
import Skills from "@/components/sections/skills/skills";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectsSection />
      <ContactForm />
    </>
  );
};

export default Home;
