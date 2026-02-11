"use client";

import { useParams, useRouter } from "next/navigation"; // Changed from 'next/navigation'
import { portfolioData } from "@/app/data/portfolio";
import { Navbar } from "@/app/components/navbar";
import { Button } from "@/app/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
    const params = useParams();
    const router = useRouter();
    const project = portfolioData.projects.find((p) => p.id === params.id);

    if (!project) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Button onClick={() => router.push("/#projects")}>Return to Portfolio</Button>
                </div>
            </div>
        );
    }

    // Helper to render the markdown-like description
    const renderContent = (content: string) => {
        return content.split('\n').map((line, i) => {
            const trimmed = line.trim();
            if (trimmed.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('- **')) {
                const parts = trimmed.replace('- **', '').split('**: ');
                return (
                    <li key={i} className="ml-4 list-disc text-zinc-400 mb-2">
                        <strong className="text-zinc-200">{parts[0]}</strong>: {parts[1]}
                    </li>
                );
            }
            if (trimmed.startsWith('- ')) {
                return <li key={i} className="ml-4 list-disc text-zinc-400 mb-2">{trimmed.replace('- ', '')}</li>;
            }
            if (!trimmed) return <div key={i} className="h-4" />;
            return <p key={i} className="text-zinc-400 leading-relaxed mb-4">{trimmed}</p>;
        });
    };

    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-400 selection:bg-cyan-500/30 pb-20">
            <Navbar />

            <div className="pt-32 container mx-auto px-6">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-8 hover:bg-zinc-900 group"
                >
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Sidebar / Meta Info */}
                        <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Code2 className="w-5 h-5 text-cyan-500" /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full border border-zinc-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">
                                        <Github className="mr-2 w-4 h-4" /> View Source
                                    </Button>
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full" variant="default">
                                        <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 order-1 lg:order-2">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-zinc-400 mb-8 border-l-4 border-cyan-500 pl-4 italic">
                                {project.shortDescription}
                            </p>

                            <div className="prose prose-invert max-w-none">
                                {renderContent(project.fullDescription)}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
