import type { Project } from "@/lib/content";

function GithubMark() {
	return (
		<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
			<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
		</svg>
	);
}

export default function ProjectCard({ project }: { project: Project }) {
	const isUnavailable = !project.url && !project.githubUrl;

	return (
		<div
			className={`rounded-xl border border-line bg-panel p-6.5 transition-colors duration-200 ${
				isUnavailable ? "opacity-70" : "hover:border-geo"
			}`}
		>
			<div className="mb-3 font-mono text-2xs text-pin">
				<span aria-hidden>▸ </span>
				{project.period}
			</div>
			<h3 className="mb-2 font-display text-tight-lg">{project.name}</h3>
			<p className="mb-4 text-tight-sm leading-[1.65] text-ink-dim">{project.description}</p>

			{project.features.length > 0 ? (
				<ul className="mb-4 flex flex-col gap-2">
					{project.features.map((feature) => (
						<li key={feature.label} className="relative pl-3.5 text-tight-sm leading-[1.6] text-ink">
							<span className="absolute top-2 left-0 h-1 w-1 rounded-full bg-geo" />
							<span className="text-ink-dim">{feature.label}：</span>
							{feature.detail}
						</li>
					))}
				</ul>
			) : null}

			<div className="mb-4 font-mono text-2xs text-geo">{project.stack.join(" · ")}</div>

			{isUnavailable ? (
				<div className="font-mono text-2xs text-ink-faint">{project.unavailableNote ?? "尚未對外公開"}</div>
			) : (
				<div className="flex flex-wrap gap-3">
					{project.url ? (
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1 text-2xs text-ink-dim underline decoration-line underline-offset-3 hover:text-geo"
						>
							網站 ↗
						</a>
					) : null}
					{project.githubUrl ? (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1 text-2xs text-ink-dim underline decoration-line underline-offset-3 hover:text-geo"
						>
							<GithubMark />
							GitHub ↗
						</a>
					) : null}
				</div>
			)}
		</div>
	);
}
