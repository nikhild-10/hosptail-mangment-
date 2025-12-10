'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ThreeDCardProps {
    children: React.ReactNode;
    className?: string;
    depth?: number;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({ children, className = '', depth = 20 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        setRotateX(yPct * -depth);
        setRotateY(xPct * depth);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={ref}
            className={`perspective-1000 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
            }}
            animate={{
                rotateX,
                rotateY,
            }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        >
            <div
                style={{
                    transform: 'translateZ(50px)',
                    transformStyle: 'preserve-3d',
                }}
            >
                {children}
            </div>
        </motion.div>
    );
};
