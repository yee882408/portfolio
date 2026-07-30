import { ImageResponse } from "next/og";

export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/png";

export default function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "#08090a",
					borderRadius: "6px",
				}}
			>
				<div
					style={{
						width: "14px",
						height: "14px",
						borderRadius: "50%",
						background: "#4fd1c5",
						boxShadow: "0 0 8px #4fd1c5",
					}}
				/>
			</div>
		),
		{ ...size },
	);
}
