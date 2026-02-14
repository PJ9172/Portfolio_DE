"use client";

import { Section } from "../section";
import { portfolioData } from "@/app/data/portfolio";
import { Briefcase, GraduationCap, Award, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Experience = () => {
    // Define links for each item
    const getItemLink = (id: number) => {
        switch (id) {
            case 1: // Bachelor's degree
                return "/marksheet.pdf";
            case 2: // Databricks Fundamentals
                return "https://credentials.databricks.com/44432d5d-6c4f-43d8-8ef8-feaa22f5b72a#acc.s25DUhGI";
            case 3: // Databricks Associate
                return "https://credentials.databricks.com/30800b7c-e501-46c4-9a63-e8a5b0fb3e37#acc.ido3wClg";
            default:
                return "#";
        }
    };

    return (
        <Section id="experience" className="bg-zinc-900/30">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience & Education</h2>

            <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                {portfolioData.experience.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    const Icon = item.type === 'education' ? GraduationCap : item.type === 'certification' ? Award : Briefcase;
                    const itemLink = getItemLink(item.id);
                    const isExternal = true; // Open all links in new tabs

                    return (
                        <div key={item.id} className={cn(
                            "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group",
                            "is-active"
                        )}>
                            {/* Icon Marker */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-cyan-500 transition-colors">
                                <Icon className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400" />
                            </div>

                            {/* Card */}
                            <Link
                                href={itemLink}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className={cn(
                                    "w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-cyan-500/50 transition-all cursor-pointer",
                                    "md:group-odd:mr-auto md:group-even:ml-auto"
                                )}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="text-lg font-bold text-white max-w-xs group-hover:text-cyan-400 transition-colors">{item.role}</h3>
                                            <span className="text-sm font-mono text-cyan-500 whitespace-nowrap">{item.period}</span>
                                        </div>
                                        <p className="text-cyan-400/80 font-medium mb-3">{item.company}</p>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};
