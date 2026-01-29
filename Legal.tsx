import React from 'react';
import { Page } from '../types';
import Reveal from '../components/Reveal';

interface LegalProps {
  type: Page.PRIVACY | Page.TERMS;
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  return (
    <div className="bg-transparent">
       <div className="py-24 bg-primary-900 text-white text-center rounded-b-[3rem] relative overflow-hidden mb-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
             <Reveal direction="down">
                <h1 className="text-5xl font-display font-bold mb-4">
                  {type === Page.PRIVACY ? 'Privacy Policy' : 'Terms & Conditions'}
                </h1>
                <p className="text-xl text-primary-200">Legal information and transparency.</p>
             </Reveal>
          </div>
       </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        <Reveal className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-slate-100">
          {type === Page.PRIVACY ? (
            <div className="prose prose-slate lg:prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Information Collection</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We collect information to provide better services to all our users. This includes basic details provided in contact forms, such as name, email address, and phone number. We may also collect technical data like IP addresses and browser types for security and analytics purposes.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Data Usage</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Your data is used solely for school administration, communication, and improving our website experience. We process student data for educational records and safety. We do not sell, trade, or rent your personal identification information to third parties.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Security</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our website uses cookies to enhance user experience, analyze site traffic, and personalize content. You can choose to disable cookies through your browser settings, though some features of the site may not function properly.
              </p>

              <p className="text-sm text-slate-400 mt-8 pt-8 border-t border-slate-100">Last Updated: October 2024</p>
            </div>
          ) : (
            <div className="prose prose-slate lg:prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                By accessing and using the Excellence Academy website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Educational Content</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                All materials on this website, including curriculum details, faculty information, and event schedules, are for informational purposes only. The school reserves the right to change curriculum, fees, and policies without prior notice.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Student Conduct</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Students accessing the student portal must adhere to the school's digital code of conduct. Any unauthorized access or misuse of school digital resources will result in disciplinary action.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
};

export default Legal;