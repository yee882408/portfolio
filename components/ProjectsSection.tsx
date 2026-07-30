import { projects } from "@/lib/content";
import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
	return (
		<section id="projects" className="border-t border-line py-18">
			<div className="mx-auto max-w-[1100px] px-8">
				<SectionLabel tag="Selected" title="專案成就" />
				<div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
