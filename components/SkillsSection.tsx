import { skills } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function SkillsSection() {
	return (
		<section id="skills" className="border-t border-line py-18">
			<div className="mx-auto max-w-[1100px] px-8">
				<SectionLabel tag="Toolkit" title="專長技能" />
				<div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
					{skills.map((col) => (
						<div key={col.title} className="rounded-xl border border-line bg-panel px-6.5 py-6">
							<h4 className="mb-4 font-display text-tight-sm tracking-[0.06em] text-pin uppercase">
								{col.title}
							</h4>
							{col.items.map((item) => (
								<div key={item} className="mb-2.5 text-sm text-ink">
									{item}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
