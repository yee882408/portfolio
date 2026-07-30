import { experience } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function ExperienceSection() {
	return (
		<section id="experience" className="border-t border-line py-18">
			<div className="mx-auto max-w-[1100px] px-8">
				<SectionLabel tag="2023 — 2026" title="工作經歷" />

				<div className="rounded-xl border border-line bg-panel px-8.5 py-8">
					<div className="mb-1.5 flex flex-wrap justify-between gap-2.5">
						<h3 className="font-display text-tight-xl font-semibold">
							{experience.title} · {experience.org}
						</h3>
						<div className="pt-0.5 font-mono text-xs text-ink-faint">
							{experience.period} · {experience.duration}
						</div>
					</div>
					<div className="mb-5.5 text-tight-sm text-ink-dim">{experience.orgDetail}</div>

					<ul className="flex flex-col gap-3">
						{experience.highlights.map((line) => (
							<li key={line} className="relative pl-5.5 text-tight-sm leading-[1.65] text-[#c7ccd0]">
								<span className="absolute top-2 left-0.5 h-1.5 w-1.5 rounded-full border-[1.5px] border-geo" />
								{line}
							</li>
						))}
					</ul>

					<div className="mt-5.5 flex flex-wrap gap-2">
						{experience.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-line px-2.5 py-1 font-mono text-2xs text-ink-dim"
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
