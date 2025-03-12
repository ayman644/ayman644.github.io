import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["JavaScript","HTML/CSS", "React", "Vue", "Typescript", "TailwindCSS", "Bootstrap"]
    const backendSkills = ["Python", "Java", "C#","Node.js", "AWS", "MongoDB"]


    return (
        <section 
        id ="about" 
        className="min-h-screen flex items-center justify-center py-20"
        >
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About Me
                </h2>
            
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all
                                bg-white/5 backdrop-blur-md">
                    <p className="text-gray-300 mb-6 text-sm text-center">
                                I'm a driven developer with a passion for full-stack development, always seeking hands-on opportunities to 
                                sharpen my skills.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rbga(40,0,43,0.2)] transition ">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                    key={key}
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                    hover:shadow-[0_2px_8px_rbga(40,0,43,0.2)] transition ">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5 backdrop-blur-md">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                        <ul className="list-disc text-sm text-gray-300 space-y-2 px-6">
                            <li>
                                <strong> Bachelor of Computing - Software Development</strong> <br></br>Australian National University (2022-2026)
                            </li>
                            <br></br>
                            <li>
                                <strong> ICT10115 - Certificate I In Information, Digital Media Technology </strong> <br></br> High School
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/5 backdrop-blur-md">
                        <h3 className="text-xl font-bold mb-4 "> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold text-sm"> Fullstack Software Engineer Intern - Penten (July 2024 - December 2024)</h4>
                                <p className="text-sm mt-1"> Engineered full-stack solutions that boosted system efficiency and delivered engaging user experiences </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm"> Fullstack Software Developer, Tech Bootcamp - Accenture (June 2024)</h4>
                                <p className="text-sm mt-1">Developed a web application analysing bias in the media using OpenAI and Google Search APIs </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm"> Policy Officer Vacationer - Department of Infrastructure (November 2022 - February 2023)</h4>
                                <p className="text-sm mt-1"> Served as a policy officer in the strategy team,
                                    developing policy frameworks to enhance regional infrastructure and drive strategic growth </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </RevealOnScroll>
        </section>
    )
};