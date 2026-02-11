"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export const Section = ({ children, id, className }: SectionProps) => {
    return (
        <section id={id} className={cn("py-20 md:py-32 relative", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6"
            >
                {children}
            </motion.div>
        </section>
    );
};
