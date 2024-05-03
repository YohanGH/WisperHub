import "./loadingPage-styles.css";
import React, { useEffect } from "react";
import { motion, useTime, useMotionValue } from "framer-motion";
import ProgressBar from "../progress-bar/ProgressBar";

export default function LoadingPage() {
	const progress = useMotionValue(0);
	const time = useTime();

	useEffect(() => {
		const unsubscribe = time.onChange((latest) => {
			const newProgress = (latest / 5000) * 100;
			if (newProgress >= 100) {
				progress.stop();
				progress.set(100);
			} else {
				progress.set(newProgress);
			}
		});

		return () => unsubscribe();
	}, [time, progress]);

	return (
		<div>
			<motion.div
				className="loading-page"
				animate={{
					scale: [1, 2, 2, 1, 1],
					rotate: [0, 0, 180, 180, 0],
					borderRadius: ["0%", "0%", "50%", "50%", "0%"],
				}}
				transition={{
					duration: 3,
					ease: "easeInOut",
					times: [0, 0.2, 0.5, 0.8, 1],
					repeat: Infinity,
					repeatDelay: 1,
				}}
			>
				<svg viewBox="2 8 16 24" width="16" height="24"></svg>
			</motion.div>
			<h2>Loading...</h2>
			<ProgressBar progress={progress.get()} />
		</div>
	);
}
