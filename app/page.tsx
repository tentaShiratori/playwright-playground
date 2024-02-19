"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const ref = useRef<HTMLVideoElement>(null);
	const [end, setEnd] = useState(false);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<video
				data-testid={"video"}
				src="/video.mp4"
				ref={ref}
				onEnded={() => {
					setEnd(true);
				}}
				className="w-[400px]"
			/>
			<button onClick={() => ref.current?.play()} type="button">
				押せ
			</button>
			{end ? <div data-testid="endText">終わり！</div> : <div>まだ</div>}
		</main>
	);
}
