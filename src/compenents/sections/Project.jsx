import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent text-center"> 
                       Projects 
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rbga(40,0,43,0.2)] transition
                                        bg-white/5 backdrop-blur-md">
                            <h3 className="text-xl font-bold mb-2"> Panorama </h3>
                            <p className="text-gray-200 mb-4 text-sm"> 
                                    A web application that mitigates media bias by comparing supporting and opposing sources, then generating an objective bias score for the 
                                    original content.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JavaScript", "HTML/CSS", "Node.js", "AWS Amplify", "Python", "API"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rbga(40,0,43,0.2)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 my-4">
                            
                                <a
                                href="https://github.com/ayman644/panorama"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4
                                            text-sm"> 
                                View Project →
                                <FaGithub size={22} />
                                </a>
                            </div>
                            
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rbga(59,130,246,0.2)] transition
                                        bg-white/5 backdrop-blur-md">
                            <h3 className="text-xl font-bold mb-2"> Web Portfolio </h3>
                            <p className="text-gray-200 mb-13 text-sm"> 
                                What you're looking at! 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Vue", "Tailwindcss", "JavaScript", "HTML/CSS"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rbga(40,0,43,0.2)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 my-4">
                            
                                <a  
                                href="https://github.com/ayman644/panorama"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4
                                            text-sm mt-13"> 
                                View Project →
                                <FaGithub size={22} />
                                </a>
                            </div>
                            
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rbga(40,0,43,0.2)] transition
                                        bg-white/5 backdrop-blur-md">
                            <h3 className="text-xl font-bold mb-2"> ANU Ekta Website </h3>
                            <p className="text-gray-200 mb-4 text-sm"> 
                                    A modern, responsive website built for Ekta, ANU's South Asian cultural society. Developed using React, TypeScript and Tailwind CSS. Deployed on Vercel with a custom domain: 
                                    <a className="font-bold"href="https://www.anuekta.com" target="_blank">"anuekta.com"</a>.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TypeScript", "HTML/CSS", "Tailwindcss","Supabase", "Python", "API", "Vercel"].map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rbga(40,0,43,0.2)] transition-all">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 my-4">
                            
                                <a
                                href="https://github.com/ayman644/EktaWeb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors my-4
                                            text-sm"> 
                                View Project →
                                <FaGithub size={22} />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}
