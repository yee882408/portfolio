import { profile } from "@/lib/content";

const contactItems = [
	{ label: "Email", value: profile.email, href: `mailto:${profile.email}` },
	{ label: "Tel", value: profile.phone },
];

export default function Footer() {
	return (
		<footer id="contact" className="mt-auto border-t border-line py-12">
			<div className="mx-auto flex max-w-[1100px] flex-wrap items-start justify-between gap-4 px-8 text-tight-sm text-ink-faint">
				<div className="flex flex-col gap-2">
					{contactItems.map((item) => (
						<div key={item.label} className="flex items-baseline gap-2">
							<span className="font-mono text-2xs tracking-wide text-ink-faint/70 uppercase">
								{item.label}
							</span>
							{item.href ? (
								<a
									href={item.href}
									className="text-ink underline decoration-line underline-offset-3 hover:text-geo"
								>
									{item.value}
								</a>
							) : (
								<span className="text-ink">{item.value}</span>
							)}
						</div>
					))}
				</div>
				<a
					href={profile.github}
					target="_blank"
					rel="noopener noreferrer"
					className="pt-0.5 underline decoration-line underline-offset-3 text-ink-dim hover:text-geo"
				>
					GitHub ↗
				</a>
			</div>
		</footer>
	);
}
