import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";


export const Home = () => {
    return (
        <section id="home" 
        className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent leading-right">
                        Hello! I'm Ayman.
                    </h1>
                    <p className="text-gray-400 text-lg mb-4 max-w-lg mx-auto">
                        I am a student at The Australian National University studying Bachelor of Computing, majoring in Software Development.
                    </p>
                    <h1 className="inline-flex items-center gap-5 text-xl mb-6 max-w-lg mx-auto">

                        <a 
                            href="public/Resume_AymanShams.pdf" 
                            download="AymanShams_Resume.pdf"
                            className=" inline-flex items-center gap-3 border border-purple-500/50 text-blue py-2 px-5 rounded font-medium text-base transition-all duration-200 
                            hover:translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(59,130, 246, 0.2)] hover:bg-purple-500/10
                            text-sm
                            bg-white/5 backdrop-blur-md">
                            Resume 
                            <FaFileDownload size={18}/>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ayman-shams"
                            target="blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"> 
                            <FaLinkedin size={23}/> 
                        </a>

                        <a
                            href="mailto:ayymann.s@gmail.com"
                            target="blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"> 
                            <MdEmail size={26}/> 
                        </a>
                    </h1>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" 
                        className="bg-purple-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130, 246, 0.4)]
                        text-sm">
                            View Projects 
                        </a>

                        <a href="#contact" 
                        className="border border-purple-500/50 text-blue py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130, 246, 0.2)] hover:bg-purple-500/10
                        bg-white/5 backdrop-blur-md
                        text-sm">
                            Contact Me
                        </a>

                    </div>
                </div>  
            </RevealOnScroll>
        </section>
    )
}