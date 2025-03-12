import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""})
        })
        .catch(() => alert("Something went wrong, please try again."));
        
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
                <div className="w-full px-4 mx-auto md:w-[500px]">
                    <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent text-center"> 
                        Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative bg-white/5 backdrop-blur-md">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                value={formData.name} 
                                className="text-sm w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                >
                            </input>
                        </div>

                        <div className="relative bg-white/5 backdrop-blur-md">
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                required 
                                value={formData.email} 
                                className="text-sm w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                >
                            </input>
                        </div>

                        <div className="relative bg-white/5 backdrop-blur-md">
                            <textarea  
                                id="message" 
                                name="message" 
                                required 
                                value={formData.message} 
                                rows={5}
                                className="text-sm w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                                placeholder="Your message..."
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                >
                            </textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="text-sm w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}