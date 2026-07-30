import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<AboutSection />
			<ExperienceSection />
			<SkillsSection />
			<ProjectsSection />
			<Footer />
		</>
	);
}
