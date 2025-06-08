import Hero from "./components/hero/hero"
import AboutSection from "./components/about/about"
import Footer from "./components/footer/footer"
import Projects from "./components/projects/projects"


export default function Home() {

  return (
    <main>
      <Hero/>
      <AboutSection />
      <Projects/>
      <Footer/>
      {/* <Project
        image={selectedProject.image}
        title={selectedProject.title}
        description={selectedProject.description}
        date={selectedProject.year.toString()}
        skills={["Structural Design", "3D Visualization"]} // manually for now
        client={selectedProject.client}
      /> */}
      </main>
  )
}
