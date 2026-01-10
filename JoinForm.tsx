import React, { useState } from 'react';
import { subsystems, appConfig } from './data';

export default function JoinForm({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
      fullName: '',
      regNum: '',
      email: '',
      phone: '',
      branch: '',
      year: '',
      department: '',
      reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check for phone number
    if (!/^\d{10}$/.test(formData.phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // LOGIC TO "LINK TO EXCEL"
    const scriptURL = appConfig.recruitment.googleSheetScriptUrl;

    if (scriptURL) {
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, (formData as any)[key]));
        
        // Use 'no-cors' mode to avoid CORS issues while sending data to Google Apps Script
        fetch(scriptURL, { method: 'POST', body: data, mode: 'no-cors' })
            .then(() => console.log('Form submitted successfully'))
            .catch(error => console.error('Error!', error.message));
            
       console.log("Submitting to Excel via Script URL:", scriptURL, formData);
    } else {
        console.log("No Script URL configured in data.ts", formData);
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-4xl text-white mb-8 animate-bounce">
          <i className="fas fa-check"></i>
        </div>
        <h1 className="text-4xl font-black text-white uppercase italic mb-4">Application Received</h1>
        <p className="text-gray-400 text-lg max-w-md mb-8">
          Thank you for your interest in Formula Manipal. Our recruitment team will review your application and contact you shortly.
        </p>
        <button 
          onClick={() => onNavigate('landing')}
          className="px-8 py-3 bg-neutral-800 text-white font-bold uppercase tracking-widest hover:bg-red-600 transition-colors rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <button 
            onClick={() => onNavigate('landing')} 
            className="mb-8 text-gray-500 hover:text-white flex items-center gap-2 font-bold uppercase tracking-widest text-xs transition-colors"
        >
            <i className="fas fa-arrow-left"></i> Back
        </button>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="mb-10">
                <h2 className="text-red-500 font-bold uppercase tracking-[0.2em] mb-2">Recruitment</h2>
                <h1 className="text-4xl md:text-5xl font-black text-white italic uppercase leading-none">Start Your Engine</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                        <input name="fullName" onChange={handleChange} type="text" required className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="Oscar Pia..." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Registration Number</label>
                        <input name="regNum" onChange={handleChange} type="text" required className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="2509..." />
                    </div>
                </div>

                {/* Contact Info Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                        <input name="email" onChange={handleChange} type="email" required className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" placeholder="oscar@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number (10 Digits)</label>
                        <input 
                            name="phone" 
                            onChange={handleChange} 
                            type="tel" 
                            pattern="[0-9]{10}" 
                            maxLength={10}
                            title="Please enter a 10-digit mobile number"
                            required 
                            className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" 
                            placeholder="9876543210" 
                        />
                    </div>
                </div>

                {/* Academic Info Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Branch</label>
                        <input 
                            name="branch" 
                            onChange={handleChange} 
                            type="text" 
                            required 
                            className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" 
                            placeholder="e.g. Mechanical, CSE, E&E" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Year of Study</label>
                        <select 
                            name="year" 
                            onChange={handleChange} 
                            required
                            className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                            <option value="">Select Year...</option>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="4th Year">4th Year</option>
                        </select>
                    </div>
                </div>

                {/* Department Selection */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Preferred Department</label>
                    <select name="department" onChange={handleChange} required className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors appearance-none cursor-pointer">
                        <option value="">Select a department...</option>
                        {subsystems.filter(s => s.name !== 'Management').map(s => (
                            <option key={s.name} value={s.name}>{s.name}</option>
                        ))}
                         <option value="Management">Management</option>
                    </select>
                </div>

                {/* Reason / Motivation */}
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Why do you want to join Formula Manipal?</label>
                    <textarea name="reason" onChange={handleChange} required rows={4} className="w-full bg-black border border-neutral-700 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors resize-none" placeholder="Tell us about your passion for motorsports..."></textarea>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-red-600 text-white font-black text-lg uppercase tracking-widest py-4 rounded-xl hover:bg-red-700 transition-all hover:scale-[1.01] shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                >
                    Submit Application
                </button>
            </form>
        </div>
      </div>
    </div>
  );
}
