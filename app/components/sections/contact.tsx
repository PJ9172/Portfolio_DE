"use client";

import { Section } from "../section";
import { portfolioData } from "@/app/data/portfolio";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export const Contact = () => {
    return (
        <Section id="contact" className="bg-zinc-900/30">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-zinc-400">
                        I&apos;m currently looking for new opportunities in Data Engineering.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8 bg-zinc-900 border-zinc-800">
                        <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
                        <div className="space-y-6">
                            <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-4 text-zinc-400 hover:text-cyan-400 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-lg">{portfolioData.personal.email}</span>
                            </a>

                            <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center gap-4 text-zinc-400 hover:text-cyan-400 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-lg">{portfolioData.personal.phone}</span>
                            </a>

                            <div className="flex items-center gap-4 text-zinc-400">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="text-lg">{portfolioData.personal.location}</span>
                            </div>

                            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-blue-400 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span className="text-lg">LinkedIn Profile</span>
                            </a>
                        </div>
                    </Card>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                                placeholder="Hello! I'd like to discuss..."
                            />
                        </div>
                        <Button className="w-full py-6 text-lg rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-none shadow-lg shadow-cyan-500/20">
                            Send Message <Send className="ml-2 w-5 h-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
