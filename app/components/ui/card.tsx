"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Card = ({ children, className, onClick }: CardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300",
                className
            )}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export const CardHeader = ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={cn("p-6 pb-3", className)}>{children}</div>
);

export const CardTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
    <h3 className={cn("text-xl font-bold text-zinc-100", className)}>{children}</h3>
);

export const CardContent = ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={cn("p-6 pt-0", className)}>{children}</div>
);
