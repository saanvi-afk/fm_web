
import React from 'react';
import { contactDetails } from './data';

export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
                {/* Manager Info */}
                <div>
                    <h3 className="text-xl font-black italic text-white uppercase mb-6 border-l-4 border-red-600 pl-4">Team Manager</h3>
                    <div className="space-y-4 text-gray-400">
                        <p className="text-2xl font-bold text-white">{contactDetails.manager.name}</p>
                        <p className="flex items-center gap-3 hover:text-red-500 transition-colors cursor-pointer">
                            <i className="fas fa-phone"></i> {contactDetails.manager.phone}
                        </p>
                        <p className="flex items-center gap-3 hover:text-red-500 transition-colors cursor-pointer">
                            <i className="fas fa-envelope"></i> {contactDetails.manager.email}
                        </p>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-black italic text-white uppercase mb-6">Follow Us</h3>
                    <div className="flex gap-4">
                        {contactDetails.socials.map((social, i) => (
                            <a key={i} href={social.link} className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300 border border-neutral-800 hover:scale-110">
                                <i className={`${social.icon} text-xl`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Map */}
                <div className="h-48 w-full rounded-xl overflow-hidden border border-neutral-800 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.082725350386!2d74.79212007575647!3d13.34493390937748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a7d2c4c3d3%3A0x8797493237569106!2sManipal%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1709923847520!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        loading="lazy" 
                        title="Workshop Location"
                    ></iframe>
                </div>
            </div>
            
            <div className="text-center text-gray-600 text-sm font-bold uppercase tracking-widest pt-8 border-t border-neutral-900">
                &copy; 2025 Formula Manipal. All Rights Reserved.
            </div>
        </footer>
    )
}
