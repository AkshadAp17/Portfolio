import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="floating-shapes">
        <div className="floating-shape">💻</div>
        <div className="floating-shape">⚡</div>
        <div className="floating-shape">🚀</div>
        <div className="floating-shape">🎯</div>
        <div className="floating-shape">💡</div>
        <div className="floating-shape">🔧</div>
        <div className="floating-shape">📱</div>
        <div className="floating-shape">🌐</div>
        <div className="floating-shape">🎨</div>
      </div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
