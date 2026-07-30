import { about, profile } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function AboutSection() {
	return (
		<section id="about" className="border-t border-line py-18">
			<div className="mx-auto max-w-[1100px] px-8">
				<SectionLabel tag="Profile" title="關於我" />
				<div className="mb-6 flex items-baseline gap-3">
					<span className="font-display text-2xl font-bold">{profile.name}</span>
					<span className="font-mono text-sm text-geo">{profile.englishName}</span>
					<span className="font-mono text-xs text-ink-faint">{profile.role}</span>
				</div>
				<div className="flex max-w-[720px] flex-col gap-5">
					{about.map((paragraph) => (
						<p key={paragraph.slice(0, 12)} className="text-tight-sm leading-[1.75] text-ink-dim">
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}
