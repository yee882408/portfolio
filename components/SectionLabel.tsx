export default function SectionLabel({ tag, title }: { tag: string; title: string }) {
	return (
		<div className="mb-10 flex items-center gap-3.5">
			<span className="rounded-full border border-pin/35 bg-pin/8 px-2.5 py-1 font-mono text-2xs text-pin">
				{tag}
			</span>
			<h2 className="font-display text-tight-3xl font-semibold">{title}</h2>
		</div>
	);
}
