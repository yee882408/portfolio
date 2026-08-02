import { profile, stats } from "@/lib/content";

export default function Hero() {
	return (
		<section id="top" className="relative overflow-hidden pt-35 pb-25">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[720px]"
				style={{
					backgroundImage: `
						repeating-radial-gradient(circle at 82% -10%, transparent 0, transparent 60px, rgba(58,95,82,0.5) 61px, transparent 62px, transparent 130px),
						repeating-radial-gradient(circle at 82% -10%, transparent 0, transparent 160px, rgba(79,209,197,0.12) 161px, transparent 163px, transparent 260px)
					`,
					WebkitMaskImage: "linear-gradient(to bottom, black, transparent 90%)",
					maskImage: "linear-gradient(to bottom, black, transparent 90%)",
				}}
			/>

			<div className="relative z-1 mx-auto max-w-[1100px] px-8">
				<div className="mb-5 flex items-center gap-2 font-mono text-xs tracking-wide text-geo">
					<span>◎</span>
					{profile.coordLabel}
				</div>

				<h1 className="max-w-[820px] font-display text-hero-sm leading-[1.12] font-bold tracking-tight sm:text-5xl lg:text-hero-lg">
					{profile.heroTitle.map((part, i) =>
						typeof part === "string" ? (
							<span key={i}>{part}</span>
						) : (
							<span key={i} className="text-geo">
								{part.text}
							</span>
						)
					)}
				</h1>

				<p className="mt-6 max-w-[600px] text-tight-lg leading-[1.7] text-ink-dim">
					{profile.heroSub}
				</p>

				<div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-3">
					{stats.map((stat) => (
						<div key={stat.label} className="bg-panel px-5 py-5">
							<b className="block font-display text-tight-2xl text-geo">{stat.value}</b>
							<span className="text-xs text-ink-faint">{stat.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
