import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Nav from "../components/navBar";
import AboutSection from "@/components/AboutSection";
import ProjectsList from "@/components/ProjectList";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="letter">
      <Header />
      <Nav />
      <AboutSection/>
      <ProjectsList/>
      <CallToAction/>
      <Footer/>
    </main>
  );
}
