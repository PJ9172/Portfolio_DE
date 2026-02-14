"use client";

import { Section } from "../section";
import { portfolioData } from "@/app/data/portfolio";
import { Card, CardContent } from "../ui/card";
import { Badge } from "lucide-react"; // Wait, Badge is not in lucide, I'll use a span
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

export const Projects = () => {
    return (
        <Section id="projects">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                    A selection of data engineering pipelines and cloud architectures I&apos;ve built.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`} className="group block h-full">
                        <Card className="h-full bg-zinc-900 border-zinc-800 hover:border-cyan-500/50 transition-all duration-300">
                            <div className="aspect-video w-full bg-zinc-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                {/* Placeholder Gradient since we don't have real images yet */}
                                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                                    <span className="text-zinc-700 font-mono text-lg font-bold group-hover:text-cyan-900 transition-colors">
                                        Project Preview
                                    </span>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                                <p className="text-zinc-400 mb-6 line-clamp-3">
                                    {project.shortDescription}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-md border border-zinc-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="px-2 py-1 bg-zinc-800 text-zinc-500 text-xs rounded-md border border-zinc-700">
                                            +{project.techStack.length - 3}
                                        </span>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="https://github.com/PJ9172" target="_blank" rel="noopener noreferrer">
                    <Button
                        variant="outline"
                        className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10"
                    >
                        View GitHub Profile
                    </Button>
                </Link>
            </div>
        </Section>
    );
};
