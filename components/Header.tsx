import { profile } from "@/lib/content";

const navItems = [
	{ href: "#experience", label: "經歷" },
	{ href: "#projects", label: "專案" },
	{ href: "#skills", label: "技能" },
	{ href: "#about", label: "關於" },
	{ href: "#contact", label: "聯絡" },
];

export default function Header() {
	return (
		<header className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur-md">
			<div className="mx-auto flex h-17 max-w-[1100px] items-center justify-between px-8">
				<a
					href="#top"
					className="flex items-center gap-2 font-display text-lg font-bold"
				>
					<span className="h-2 w-2 rounded-full bg-geo shadow-[0_0_10px_var(--geo)]" />
					個人履歷
				</a>
				<div className="flex items-center gap-7">
					<nav className="hidden gap-7 text-tight-sm text-ink-dim sm:flex">
						{navItems.map((item) => (
							<a key={item.href} href={item.href} className="transition-colors hover:text-geo">
								{item.label}
							</a>
						))}
					</nav>
					<a
						href={profile.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						className="text-ink-dim transition-colors hover:text-geo"
					>
						<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
							<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
						</svg>
					</a>
				</div>
			</div>
		</header>
	);
}
