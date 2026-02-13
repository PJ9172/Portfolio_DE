"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Cloud } from "lucide-react";
import { Button } from "../ui/button";
import { portfolioData } from "@/app/data/portfolio";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
                <div className="absolute w-full h-full bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-sm mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Available for new projects
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Building Scalable <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Data Pipelines
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
                        {portfolioData.personal.summary}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="#projects">
                            <Button size="lg" className="rounded-full h-12 px-8 text-base">
                                View Projects <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="#contact">
                            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base">
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    {/* Abstract Data Visualization */}
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-cyan-600/40 rounded-full border-dashed shadow-[0_0_15px_rgba(8,145,178,0.3)]"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-12 border-2 border-blue-500/50 rounded-full border-dashed shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        />

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 left-1/4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                        >
                            <Database className="w-8 h-8 text-cyan-400" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-1/4 right-1/4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                        >
                            <Cloud className="w-8 h-8 text-blue-500" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
