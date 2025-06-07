import { useState } from 'react';

export default function ContactForm({ children, onSubmit }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            await onSubmit(e);
            setSubmitStatus('success');
        } catch (error) {
            setSubmitStatus('error');
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="">
            <div className="container mx-auto">
                <h1 className="text-dracula-purple font-bold text-2xl mb-6">Contact Me</h1>

                <div className="max-w-2xl">
                    <div className="bg-d-background border border-selection rounded-xl p-6">
                        <div onSubmit={handleSubmit}>
                            {children}
                        </div>

                        {submitStatus === 'success' && (
                            <div className="mt-4 p-4 bg-dracula-green bg-opacity-20 border border-dracula-green rounded-xl">
                                <p className="text-dracula-green font-medium">
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mt-4 p-4 bg-dracula-red bg-opacity-20 border border-dracula-red rounded-xl">
                                <p className="text-dracula-red font-medium">
                                    Failed to send message. Please try again or email me directly.
                                </p>
                            </div>
                        )}

                        {isSubmitting && (
                            <div className="mt-4 p-4 bg-dracula-purple bg-opacity-20 border border-dracula-purple rounded-xl">
                                <p className="text-dracula-purple font-medium">
                                    Sending message...
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
      );
}