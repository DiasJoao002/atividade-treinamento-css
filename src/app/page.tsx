import Introduction from '@/components/Introduction';
import Curriculum from '@/components/Curriculum';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Documents from '@/components/Documents';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Introduction />
      <Curriculum />
      <Projects />
      <Skills />
      <Documents />
      <Certifications />
      <Contact />
    </div>
  );
}
