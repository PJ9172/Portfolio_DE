"use client";

import { Section } from "../section";
import { portfolioData } from "@/app/data/portfolio";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

export const Skills = () => {
    return (
        <Section id="skills">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {portfolioData.skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-semibold text-cyan-400 mb-4">{skillGroup.category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skillGroup.items.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div
                                        key={skill.name}
                                        className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg flex flex-col items-center gap-3 hover:border-cyan-500/50 hover:bg-zinc-800 transition-all group"
                                    >
                                        <Icon className="w-8 h-8 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                                        <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
