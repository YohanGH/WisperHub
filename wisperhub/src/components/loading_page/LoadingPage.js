import "./loading-page-styles.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "../progress_bar/ProgressBar.js";

export default function LoadingPage() {
	const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

	return (
		<div>
			<motion.div
				id="loadingPage"
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
			<h2 id="loadingTitle">Loading...</h2>
			<ProgressBar progress={progress} />
		</div>
	);
}
