import React from "react";
import "./progress-bar-style.css";
import { motion, useMotionValue, useTransform } from 'framer-motion';

/**
 * Components d'affichage de la barrre de chargement
 * @param {number} props.progress - valeur de progression
	*/

export default function ProgressBar({ progress }) {
	const width = useMotionValue(0);
	const withAsPercent = useTransform(width, [0, 100], ['0%', '100%']);

	width.set(progress);

	return (
		<div className="progress-bar">
      <motion.div
		style={{ width: withAsPercent }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
	)
}
