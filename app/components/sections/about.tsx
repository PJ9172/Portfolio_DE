"use client";

import { Section } from "../section";
import { portfolioData } from "@/app/data/portfolio";
import { User, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export const About = () => {
    return (
        <Section id="about" className="bg-zinc-900/30">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-20 blur-xl" />
                        <Card className="relative bg-zinc-900 border-zinc-800">
                            <CardContent className="p-8 space-y-4">
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <User className="w-5 h-5 text-cyan-500" />
                                    <span>{portfolioData.personal.name}</span>
                                </div>
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <MapPin className="w-5 h-5 text-cyan-500" />
                                    <span>{portfolioData.personal.location}</span>
                                </div>
                                <div className="flex items-center gap-4 text-zinc-300">
                                    <Mail className="w-5 h-5 text-cyan-500" />
                                    <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-cyan-400 transition-colors">
                                        {portfolioData.personal.email}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                    <div className="space-y-4 text-zinc-400 leading-relaxed">
                        <p className="text-lg text-white">
                            {portfolioData.personal.title}
                        </p>
                        <p>
                            I am a passionate Data Engineer with a strong foundation in Computer Applications from Savitribai Phule Pune University.
                            My expertise lies in building robust data architectures, optimizing ETL pipelines, and working with modern cloud technologies.
                        </p>
                        <p>
                            With certifications in Databricks and a deep understanding of the Lakehouse architecture,
                            I focus on transforming complex raw data into clean, reliable, and actionable insights for businesses.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
