import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'
import HeroGradient from './components/heroSection/HeroGradient'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectsMain from './components/projectSection/ProjectsMain'
import SkillsMain from './components/skillSection/SkillsMain'
import SubSkills from './components/skillSection/SubSkills'

function App() {

  return (
    <>
      <main className='font-body'>
        <NavbarMain/>
        <HeroMain/>
        <HeroGradient/>
        <SubHeroSection/>
        <AboutMeMain/>
        <SkillsMain/>
        <SubSkills/>
        <ProjectsMain/>
        <ContactMeMain/>
        <FooterMain/>
      </main>
    </>
  )
}

export default App
