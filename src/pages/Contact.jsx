import ContactForm from "../components/ContactForm";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        return emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            form.current, 
            {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            }
        );
    };

    return (
        <ContactForm onSubmit={sendEmail}>
            <form ref={form} className="space-y-6">
                <div>
                    <label className="block text-dracula-cyan text-sm font-medium mb-2">
                        Name *
                    </label>
                    <input 
                        type="text" 
                        name="user_name" 
                        required
                        className="w-full px-4 py-3 bg-d-foreground border border-selection rounded-xl text-d-background placeholder-dracula-comment focus:outline-none focus:border-dracula-purple"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="block text-dracula-cyan text-sm font-medium mb-2">
                        Email *
                    </label>
                    <input 
                        type="email" 
                        name="user_email" 
                        required
                        className="w-full px-4 py-3 bg-d-foreground border border-dracula-selection rounded-xl text-d-background placeholder-dracula-comment focus:outline-none focus:border-dracula-purple"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div>
                    <label className="block text-dracula-cyan text-sm font-medium mb-2">
                        Message *
                    </label>
                    <textarea 
                        name="message" 
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-d-foreground border border-selection rounded-xl text-d-background placeholder-dracula-comment focus:outline-none focus:border-dracula-purple resize-vertical"
                        placeholder="Your message"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-dracula-purple text-d-foreground font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-all duration-200">
                    Send Message
                </button>
            </form>
        </ContactForm>
    );
}